const Song = require("../domain/entities/song");
const uuid = require("uuid");

class PlaylistService {
  constructor(PlaylistRepositories) {
    this.playlistRepositories = PlaylistRepositories;
  }

  addSong(title, artist, url) {
    const song = new Song(uuid.v4(), title, artist, url, false);
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

  getAllSong() {
    return this.playlistRepositories.getAllSong();
  }
}

module.exports = PlaylistService;
