import * as express from 'express'
import { errors } from './errors';

export abstract class BaseController {
    render(resp: express.Response, next: express.NextFunction) {
        return (document) => {
            if (document) {
                resp.json(document)
                next()
            } else
                errors.NotFoundError(resp, next)('Document not found')
        }
    }
}