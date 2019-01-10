"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../config/base-controller");
const games_service_1 = require("../services/games.service");
class GamesController extends base_controller_1.BaseController {
    findAll() {
        return (req, resp, next) => {
            games_service_1.gamesService
                .findAll(req.query.page, req.url)
                .then(this.render(resp, next))
                .catch(next);
        };
    }
    create() {
        return (req, resp, next) => {
            this.render(resp, next)(req.body);
        };
    }
}
exports.gamesController = new GamesController();
//# sourceMappingURL=games.controller.js.map