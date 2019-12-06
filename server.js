
import { create, defaults } from 'http-server';
const server = create();
// const router = httpServer.router('dist/db/app.json');
const middlewares = defaults({
  static: 'dist',
  noCors: true,
});
const port = process.env.PORT || 8080;

server.use(middlewares);
// server.use(router);

server.listen(port);