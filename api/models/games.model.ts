import * as mongoose from 'mongoose'

export interface Kill extends mongoose.Document {
    Player: String,
    Kills: Number
}

export interface Game extends mongoose.Document {
    TotalKills: Number,
    Players: String[],
    Kills: Kill[]
}

const killSchema = new mongoose.Schema({
    Player: {
        type: String,
        required: true
    },
    Kills: {
        type: Number,
        required: true,
        default: 0
    }
})

const gameSchema = new mongoose.Schema({
    TotalKills: {
        type: Number,
        required: true,
        default: 0
    },
    Players: {
        type: [String],
        required: true
    },
    Kills: {
        type: [killSchema],
        required: true,
        select: false,
        default: []
    }
})

export const Game = mongoose.model<Game>('Game', gameSchema)