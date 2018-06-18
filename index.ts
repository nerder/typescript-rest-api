import "reflect-metadata";
import { createConnection } from "typeorm";
import { start } from "./server/start";

start()
  .then(() => {
    createConnection().then(( ) => {
      // tslint:disable-next-line:no-console
      console.log("Connected to the db!");
    }).catch((err) => {
      // tslint:disable-next-line:no-console
      console.error(`Error connecting to DB: ${err.message}`);
      process.exit(-1);
    });
  }).catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(`Error starting server: ${err.message}`);
    process.exit(-1);
  });
