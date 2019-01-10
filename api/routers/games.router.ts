import * as express from 'express'

import { Router } from "../../config/router";
import { gamesController } from '../controllers/games.controller';

class GamesRouter extends Router {
    apply(application: express.Application) {
        application.get('/games', gamesController.findAll())
        application.post('/games', gamesController.create())
    }
}

export const gamesRouter = new GamesRouter()