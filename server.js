
const httpServer = require('http-server');
const server = httpServer.create();
// const router = httpServer.router('dist/db/app.json');
const middlewares = httpServer.defaults({
  static: 'dist',
  noCors: true,
});
const port = process.env.PORT || 8080;

server.use(middlewares);
// server.use(router);

server.listen(port);