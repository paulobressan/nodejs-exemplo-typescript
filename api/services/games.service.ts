import { BaseService } from "../../config/base-service";
import { Game } from "../models/games.model";
import { gamesRepository } from "../repository/games.repository";
import { environment } from "../../config/environment";

class GamesService extends BaseService {
    constructor() {
        super(gamesRepository.documentName())
    }

    findAll(pageQuery: string, url: string): Promise<Game> {
        let page = parseInt(pageQuery || '1')
        page = page > 0 ? page : 1

        return new Promise((resolve, reject) => {
            gamesRepository.countDocuments()
                .then(count => {
                    gamesRepository.findAll(page)
                        .then(games => resolve(this.envelopeAll(games, { page, count, pageSize: parseInt(environment.server.pageSize), url })))
                        .catch(err => reject(err))
                }).catch(err => reject(err))
        })
    }
}

export const gamesService = new GamesService()