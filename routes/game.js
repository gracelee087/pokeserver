const express = require("express");
const router = express.Router();
const Game = require("../model/game");

router.post("/save", async (req, res) => {
  try {
    const gameData = req.body;

    const game = new Game(gameData);
    await game.save();
    res.status(200).json({ message: "Game saved successfully", game });
  } catch (error) {
    console.error("Error saving the game:", error);
    res.status(500).json({ error: "Unable to save the game" });
  }
});

router.get("/leaderboard", async (req, res) => {
  try {
    const games = await Game.find({}).sort({ turns: 1 });
    res.status(200).json({ games });
  } catch (error) {
    console.error("Error getting the leaderboard:", error);
    res.status(500).json({ error: "Unable to get the leaderboard" });
  }
});

module.exports = router;
