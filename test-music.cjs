const { spawn } = require('child_process');
const http = require('http');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9231',
  '--user-data-dir=' + process.env.TEMP + '\\chrome-test-music-check',
  'http://localhost:5173/'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9231/json', res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const tabs = JSON.parse(data);
      const appTab = tabs.find(t => t.url.includes('localhost:5173'));
      if (!appTab) {
        console.error('App tab not found');
        chrome.kill();
        process.exit(1);
      }

      const wsUrl = new URL(appTab.webSocketDebuggerUrl);
      const wsKey = Buffer.from('1234567890123456').toString('base64');

      const req = http.request({
        host: wsUrl.hostname,
        port: wsUrl.port,
        path: wsUrl.pathname,
        headers: {
          'Connection': 'Upgrade',
          'Upgrade': 'websocket',
          'Sec-WebSocket-Version': '13',
          'Sec-WebSocket-Key': wsKey
        }
      });

      req.on('upgrade', (res, socket) => {
        const payload = JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `(() => {
              const audio = document.querySelector('audio[src="/i-met-her-again.mp3"]');
              const pill = document.querySelector('.floating-music-pill');
              return JSON.stringify({
                hasAudio: !!audio,
                audioSrc: audio ? audio.src : null,
                audioVolume: audio ? audio.volume : null,
                hasPill: !!pill,
                pillText: pill ? pill.textContent : null,
                title: document.title
              });
            })()`
          }
        });

        const len = Buffer.byteLength(payload);
        const header = Buffer.alloc(6 + len);
        header[0] = 0x81;
        header[1] = 0x80 | len;
        header.writeUInt32BE(0x11223344, 2);
        for (let i = 0; i < len; i++) {
          header[6 + i] = Buffer.from(payload)[i] ^ header[2 + (i % 4)];
        }
        socket.write(header);

        socket.on('data', chunk => {
          const str = chunk.toString('utf8');
          const m = str.match(/"value":"([^"]+)"/);
          if (m) {
            console.log('DOM Audio Check:', m[1].replace(/\\"/g, '"'));
            socket.end();
            chrome.kill();
            process.exit(0);
          }
        });
      });
      req.end();
    });
  });
}, 3000);
