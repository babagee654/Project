const mongoose = require('mongoose');
const Score = require('./score');
const Schema = mongoose.Schema;


// For the user's Character Sheet

const classesEnums = {
    warrior: "warrior",
    paladin: "paladin",
    fighter: "fighter",
    ranger: "ranger",
    rogue: "rogue",
    monk: "monk",
    bard: "bard",
    cleric: "cleric",
    druid: "druid",
    sorcerer: "sorcerer",
    warlock: "warlock",
    wizard: "wizard"
}

const characterSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String,
    gender: String,
    class: String,
    race: String,
    traits: String,
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character
