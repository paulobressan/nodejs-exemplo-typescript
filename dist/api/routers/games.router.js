"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../config/router");
const games_controller_1 = require("../controllers/games.controller");
class GamesRouter extends router_1.Router {
    apply(application) {
        application.get('/hello/:id', games_controller_1.gamesController.findAll());
        application.post('/hello', games_controller_1.gamesController.create());
    }
}
exports.gamesRouter = new GamesRouter();
//# sourceMappingURL=games.router.js.map