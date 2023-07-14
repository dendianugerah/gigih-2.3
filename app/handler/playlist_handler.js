class PlaylistHandler {
  constructor(playlistService) {
    this.playlistService = playlistService;
  }

  getPlayingSong(req, res) {
    try {
      const song = this.playlistService.getPlayingSong();

      res.status(200).json({
        status: "success",
        message: "Get playing song successfully retrieved",
        data: {
          song,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  getAllSong(req, res) {
    try {
      const { sort_by, order_by } = req.query;
      const songs = this.playlistService.getAllSong(sort_by, order_by);

      res.status(200).json({
        status: "success",
        message: "Get all song successfully retrieved",
        data: {
          songs,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  addPlayingSong(req, res) {
    try {
      const { id } = req.params;

      this.playlistService.playSong(id);

      res.status(200).json({
        status: "success",
        message: "Song successfully played",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  addSong(req, res) {
    try {
      const { title, artist, url } = req.body;

      this.playlistService.addSong(title, artist, url);

      res.status(201).json({
        status: "success",
        message: "Song successfully added",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = PlaylistHandler;
