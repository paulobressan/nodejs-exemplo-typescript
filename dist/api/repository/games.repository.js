"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../config/base-repository");
const games_model_1 = require("../models/games.model");
class GamesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(games_model_1.Game);
    }
}
exports.gamesRepository = new GamesRepository();
//# sourceMappingURL=games.repository.js.map