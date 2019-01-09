import { Server } from './server/server'
import { gamesRouter } from './api/routers/games.router';
import { environment } from './config/environment';

const server = new Server()
server.bootstrap([
    gamesRouter
]).then(server => {
    console.log('Server run', environment.server.port)
}).catch(err => {
    console.log('Error run server', err)
})