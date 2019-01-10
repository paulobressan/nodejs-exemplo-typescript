"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
});
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
});
exports.Game = mongoose.model('Game', gameSchema);
//# sourceMappingURL=games.model.js.map