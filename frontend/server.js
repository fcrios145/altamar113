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
import { ServerStyleSheet } from 'styled-components'
import pug from 'pug';

import userRouter from './routes/users';
import authRouter from './routes/auth';
import plateRouter from './routes/plateRouter';
import categoryRouter from './routes/category';
import routes from "./components/shared/routes";

import App from "./components/shared/App";
import serialize from "serialize-javascript";
import { StaticRouter, matchPath } from "react-router-dom"
import favicon from 'serve-favicon'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storeReducer, initialState } from './components/shared/store'
import { composeWithDevTools } from 'redux-devtools-extension'
import isLogged from "./isLogged";
// console.log(store.getState());
// console.log('store');

const app = express();

app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(session({secret: 'ssshhhhh'}));
//TODO Change secret session for an env var
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
//console.log('ads');
//console.log( path.join(__dirname, '../public') );

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/plates', plateRouter);
app.use('/categories', categoryRouter);
// app.use('/auth', authRouter);

app.get("*", async (req, res, next) => {
    console.log("hola")
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    let logged = await isLogged(activeRoute, req);
    //console.log(await isLogged(activeRoute, req));
    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData()
        : Promise.resolve();

    initialState.logged = logged;

    
    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

    promise.then((data) => {
        const context = { data }
        const initialState2 = {...initialState, ...context.data}
        let store = createStore(storeReducer, initialState2, composeWithDevTools());
        const markup = renderToString(
            sheet.collectStyles(
            <StaticRouter location={req.url} context={context}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        ));

        const styleTags = sheet.getStyleTags(); // <-- getting all the tags from the sheet
        // console.log(styleTags);
        let options = {
            //initialData: serialize(data),
            initialStateStore: serialize(initialState2),
            markup: markup,
            styles: styleTags
        };

        
        let htmlContent = pug.renderFile(path.join(__dirname, '../views/app.pug'), options);
        // console.log(htmlContent);
        res.send(htmlContent)

    })
    .catch(next)
    .finally(() => {
        sheet.seal()
    })
});


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
