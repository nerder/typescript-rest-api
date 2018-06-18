import express from 'express';
import { Server } from 'typescript-rest';
import http from 'http';
import cors from 'cors';
import controllers from '../controllers';

export class ApiServer {

    private app: express.Application;
    private server: http.Server | null = null;
    public PORT: number = 1337;

    constructor() {
        this.app = express();
        this.config();  

        Server.useIoC();
        Server.buildServices(this.app, ...controllers);
    }

    private config(): void {
        this.app.use(cors());
    }

    public start(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.server = this.app.listen(this.PORT, (err: any) => {
                if (err) {
                    return reject(err);
                }
                // tslint:disable-next-line:no-console
                console.log(`Server Running at http://localhost:${this.PORT}!`);
                return resolve();
            });
        });

    }

    public stop(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.server) {
                this.server.close(() => {
                    return resolve(true);
                });
            } else {
                return resolve(true);
            }
        });
    }

}
