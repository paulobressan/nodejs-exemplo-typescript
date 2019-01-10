"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const games_router_1 = require("./api/routers/games.router");
const server = new server_1.Server();
server.bootstrap([
    games_router_1.gamesRouter
]).then(server => {
    console.log(server.address());
}).catch(err => {
    console.log('Error server', err);
});
//# sourceMappingURL=main.js.map