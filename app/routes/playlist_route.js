const express = require("express");
const router = express.Router();

const PlaylistRepositories = require("../domain/repositories/playlist_repositories");
const PlaylistService = require("../service/playlist_service");
const PlaylistHandler = require("../handler/playlist_handler");

const playlistRepositories = new PlaylistRepositories();
const playlistService = new PlaylistService(playlistRepositories);
const playlistHandler = new PlaylistHandler(playlistService);

router.post("/song", (req, res) => {
  playlistHandler.addSong(req, res);
});

router.get("/song/list_all", (req, res) => {
  playlistHandler.getAllSong(req, res);
});

router.post("/song/playing_now/:id", (req, res) => {
  playlistHandler.addPlayingSong(req, res);
});

router.get("/song/playing_now", (req, res) => {
  playlistHandler.getPlayingSong(req, res);
});

module.exports = router;
