const Song = require("../domain/entities/song");
const uuid = require("uuid");

class PlaylistService {
  constructor(PlaylistRepositories) {
    this.playlistRepositories = PlaylistRepositories;
  }

  addSong(title, artist, url) {
    const song = new Song(uuid.v4(), title, artist, url, false, 0);
    this.playlistRepositories.addSong(song);
    return song;
  }

  playSong(id) {
    const song = this.playlistRepositories.getSongById(id);
    if (song) {
      this.playlistRepositories.playSong(song);
    }
  }

  getPlayingSong() {
    return this.playlistRepositories.getPlayingSong();
  }

  getAllSong(sort_by, order_by) {
    return this.playlistRepositories.getAllSong(sort_by, order_by);
  }
}

module.exports = PlaylistService;
