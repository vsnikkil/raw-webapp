[![Dependency Status](https://david-dm.org/vsnikkil/raw-webapp.svg?style=flat-square)](https://david-dm.org/vsnikkil/raw-webapp)
[![devDependency Status](https://david-dm.org/vsnikkil/raw-webapp/dev-status.svg?style=flat-square)](https://david-dm.org/vsnikkil/raw-webapp#info=devDependencies)

# Raw web application stub
A simple web application stub to get things started fast. This stub includes sample http server ([Koa](https://github.com/koajs/koa)) and [React](https://github.com/facebook/react)-ready frontend. Frontend is bundled with [webpack](https://github.com/webpack/webpack). Both the client bundle and the server side code are transpiled with babel and es2015 preset. Client also includes react preset.

## Installation & Usage

### Quickstart

- <code>git clone [https://github.com/vsnikkil/raw-webapp](https://github.com/vsnikkil/raw-webapp)</code>
- <code>npm install && npm run build && npm start</code>
- Open [http://localhost:3030](http://localhost:3030)

You can configure the http port in <code>src/server/serverConfig.js</code>

Client side code is placed into <code>src/client/</code> and http server code into <code>src/server/</code>. 

### Building
To build the project, run <code>npm run build</code>. To only build client or server code: <code>npm run build:[client|server]</code>

## Watch for changes
It is possible to automatically rebuild the project on file updates.

### Watch server file changes
* `npm run watch:server`

### Watch client file changes
* `npm run watch:client` to watch client side changes (script & style)
  * `npm run watch:client:script` to watch only script changes on client side
  * `npm run watch:client:style` to only watch style changes (not working currently)

## License
Copyleft
