import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as queryParser from 'query-parser'

import { Router } from '../config/router';
import { environment } from '../config/environment';

export class Server {
    application: express.Application

    initRouters(routes: Router[]): Promise<express.Application> {
        return new Promise((resolve, reject) => {
            try {
                this.application = express()

                this.application.use(bodyParser.urlencoded({ extended: true }))
                this.application.use(bodyParser.json())

                for (let route of routes) {
                    route.apply(this.application)
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    setAddress(): Promise<express.Application> {
        return new Promise(resolve => {
            this.application.address = ''
        })
    }

    bootstrap(routes: Router[] = []): Promise<Server> {
        return this.initRouters(routes)
            .then(() => this)
    }
}