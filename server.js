const prerender = require('prerender');

const server = prerender({
  waitAfterLastRequest: 500,
  pageLoadTimeout: 20000,
  workers: 1,
  iterations: 10,
});

server.use(prerender.removeScriptTags());
server.use(prerender.blockResources());
server.use(prerender.httpHeaders());

server.start();
