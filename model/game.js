const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  winner: String,
  opponent: String,
  turns: Number,
  date: { type: Date, default: Date.now },
  // 이외에도 필요한 필드가 있다면 추가해주세요.
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;