import * as express from 'express'

export abstract class Router {
    abstract apply(application: express.Application)
}