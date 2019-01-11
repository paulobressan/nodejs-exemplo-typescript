import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerJson from './swagger.json'
import * as fs from 'fs'

import { Router } from '../config/router';
import { environment } from '../config/environment';

export class Server {
    application: express.Application

    initDataBase(): Promise<any> {
        (<any>mongoose).Promise = global.Promise

        const options: mongoose.ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }

        return mongoose.connect(environment.db.url, options)
    }

    initRouters(routes: Router[]): Promise<express.Application> {
        return new Promise((resolve, reject) => {
            try {
                this.application = express()

                this.application.use(bodyParser.urlencoded({ extended: true }))
                this.application.use(bodyParser.json())

                for (let route of routes) {
                    route.apply(this.application)
                }
                
                //Middleware swagger
                this.application.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson))
                
                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    address(): string {
        return `Express server listening on port ${environment.server.port}`
    }

    bootstrap(routes: Router[] = []): Promise<Server> {
        return this.initDataBase()
            .then(() => this.initRouters(routes)
                .then(() => this))
    }
}