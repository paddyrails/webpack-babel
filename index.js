import * as functions from 'firebase-functions';
import React from 'react-dom';
import {renderToString} from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import * as express from 'express';

const app = express();
app.get("**", (req, res) => {
    getFacts().then(facts => {
        const html = renderToString(<App facts={facts} />);
    });
})

export let ssrapp = functions.https.onRequest(app);