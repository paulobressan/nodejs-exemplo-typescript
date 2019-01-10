import { Server } from './server/server'
import { gamesRouter } from './api/routers/games.router';
import { environment } from './config/environment';

const server = new Server()
server.bootstrap([
    gamesRouter
]).then(server => {
    console.log(server.address())
}).catch(err => {
    console.log('Error server', err)
})