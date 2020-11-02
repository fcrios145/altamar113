import express from 'express';
import React from 'react';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import logger from 'morgan';
import debug from 'debug';
import http from 'http';
import { renderToString } from "react-dom/server";

import userRouter from './routes/users'
// import authRouter from './routes/auth'
import routes from "./components/shared/routes";

import App from "./components/shared/App";
import serialize from "serialize-javascript";
import { StaticRouter, matchPath } from "react-router-dom"

const app = express();

app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(session({secret: 'ssshhhhh'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../public')));
console.log('ads');
console.log( path.join(__dirname, '../public') );

app.use('/users', userRouter);
// app.use('/auth', authRouter);

app.get("*", (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

promise.then((data) => {
    const context = { data }
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
    <App />
    </StaticRouter>
);

res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
          <link rel="stylesheet" href='/static/stylesheets/main.css'>
          <script src="/static/javascripts/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
}).catch(next)
})


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}