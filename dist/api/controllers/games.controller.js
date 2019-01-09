"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../config/base-controller");
class GamesController extends base_controller_1.BaseController {
    findAll() {
        return (req, resp, next) => {
            this.render(resp, next)({ msg: req.params.id });
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