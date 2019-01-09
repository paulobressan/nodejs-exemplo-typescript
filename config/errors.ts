import * as express from 'express'

class Errors {
    NotFoundError(resp: express.Response, next: express.NextFunction) {
        return (message: string) => {
            resp.statusCode = 404
            resp.json(message)
            next(false)
        }
    }
}

export const errors = new Errors()