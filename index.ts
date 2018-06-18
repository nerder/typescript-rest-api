import { start } from './server/start';
import "reflect-metadata";
import { createConnection } from 'typeorm';

start()
    .then(() => {
        createConnection().then(( ) => {
            console.log('Connected to the db!')
        }).catch((err) => {
            console.error(`Error connecting to DB: ${err.message}`);
            process.exit(-1);
        });
    })
    .catch((err) => {
        console.error(`Error starting server: ${err.message}`);
        process.exit(-1);
    });