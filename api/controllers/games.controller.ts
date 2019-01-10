import * as express from 'express'
import { BaseController } from '../../config/base-controller';
import { gamesService } from '../services/games.service';

class GamesController extends BaseController {
    findAll(): express.RequestHandler {
        return (req: express.Request, resp: express.Response, next: express.NextFunction) => {
            gamesService
                .findAll(req.query.page, req.url)
                .then(this.render(resp, next))
                .catch(next)
        }
    }

    create(): express.RequestHandler {
        return (req: express.Request, resp: express.Response, next: express.NextFunction) => {
            this.render(resp, next)(req.body)
        }
    }
}

export const gamesController = new GamesController()