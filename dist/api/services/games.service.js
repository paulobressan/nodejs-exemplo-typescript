"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../../config/base-service");
const games_repository_1 = require("../repository/games.repository");
const environment_1 = require("../../config/environment");
class GamesService extends base_service_1.BaseService {
    constructor() {
        super(games_repository_1.gamesRepository.documentName());
    }
    findAll(pageQuery, url) {
        let page = parseInt(pageQuery || '1');
        page = page > 0 ? page : 1;
        return new Promise((resolve, reject) => {
            games_repository_1.gamesRepository.countDocuments()
                .then(count => {
                games_repository_1.gamesRepository.findAll(page)
                    .then(games => resolve(this.envelopeAll(games, { page, count, pageSize: parseInt(environment_1.environment.server.pageSize), url })))
                    .catch(err => reject(err));
            }).catch(err => reject(err));
        });
    }
}
exports.gamesService = new GamesService();
//# sourceMappingURL=games.service.js.map