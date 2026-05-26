const CDP_PORT = 9222;
(async () => {
  const list = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/new?http://127.0.0.1:8771/concepts.html`, {method:'PUT'})).json().catch(async()=> {
    return await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/new?http://127.0.0.1:8771/concepts.html`)).json();
  });
  const ws = list.webSocketDebuggerUrl;
  const WebSocket = require('ws');
  const sock = new WebSocket(ws);
  let id = 0; const pending = {};
  const send = (method, params={}) => new Promise(res => { const i=++id; pending[i]=res; sock.send(JSON.stringify({id:i,method,params})); });
  sock.on('message', m => { const d = JSON.parse(m); if (d.id && pending[d.id]) pending[d.id](d.result); });
  await new Promise(r => sock.on('open', r));
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {width:1180, height:1180, deviceScaleFactor:2, mobile:false});
  await send('Page.navigate', {url:'http://127.0.0.1:8771/concepts.html'});
  await new Promise(r => setTimeout(r, 2500));
  const {data} = await send('Page.captureScreenshot', {format:'png', captureBeyondViewport:true, fromSurface:true});
  require('fs').writeFileSync('concepts.png', Buffer.from(data, 'base64'));
  console.log('saved concepts.png');
  await send('Page.close').catch(()=>{});
  process.exit(0);
})();
