import * as express from 'express'
import { BaseController } from '../../config/base-controller';

class GamesController extends BaseController {
    findAll(): express.RequestHandler {
        return (req: express.Request, resp: express.Response, next: express.NextFunction) => {
            this.render(resp, next)({ msg: req.params.id })
        }
    }

    create(): express.RequestHandler {
        return (req: express.Request, resp: express.Response, next: express.NextFunction) => {
            this.render(resp, next)(req.body)
        }
    }
}

export const gamesController = new GamesController()