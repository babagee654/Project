const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  race: {
    human: Boolean,
    elf: Boolean,
    orc: Boolean,
    dwarf: Boolean
  },
  class: {
    warrior: {
      type: Number,
      default: 0
    },
    paladin: {
      type: Number,
      default: 0
    },
    fighter: {
      type: Number,
      default: 0
    },
    ranger: {
      type: Number,
      default: 0
    },
    rogue: {
      type: Number,
      default: 0
    },
    monk: {
      type: Number,
      default: 0
    },
    bard: {
      type: Number,
      default: 0
    },
    cleric: {
      type: Number,
      default: 0
    },
    druid: {
      type: Number,
      default: 0
    },
    sorcerer: {
      type: Number,
      default: 0
    },
    warlock: {
      type: Number,
      default: 0
    },
    wizard: {
      type: Number,
      default: 0
    },
  },
  trait: {
    beautiful: Boolean,
    strong: Boolean,
    wary: Boolean,
    rich: Boolean,
    knowledgeable: Boolean,
    liar: Boolean,
    music: Boolean,
    magic: Boolean,
    wild: Boolean,
    acrobatic: Boolean,
    intuitive: Boolean,
    spirit: Boolean,
    learner: Boolean,
    martial: Boolean,
    speaker: Boolean,
    unlucky: Boolean,
  }
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score