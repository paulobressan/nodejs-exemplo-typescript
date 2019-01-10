import { BaseRepository } from "../../config/base-repository";
import { Game } from "../models/games.model";

class GamesRepository extends BaseRepository<Game>{
    constructor() {
        super(Game)
    }
}

export const gamesRepository = new GamesRepository()