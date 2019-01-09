"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const games_router_1 = require("./api/routers/games.router");
const environment_1 = require("./config/environment");
const server = new server_1.Server();
server.bootstrap([
    games_router_1.gamesRouter
]).then(server => {
    console.log('Server run', environment_1.environment.server.port);
}).catch(err => {
    console.log('Error run server', err);
});
//# sourceMappingURL=main.js.map