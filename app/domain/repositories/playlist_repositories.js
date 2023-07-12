
class PlaylistRepositories {
  constructor() {
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  playSong(song) {
    song.isPlaying = true;
  }

  getAllSong() {
    return this.songs;
  }

  getPlayingSong() {
    let left = 0;
    let right = this.songs.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.songs[mid].isPlaying) {
        return this.songs[mid];
      } else if (this.songs[mid].isPlaying === false) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return null;
  }

  getSongById(id) {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].id === id) {
        return this.songs[i];
      }
    }
  }
}

module.exports = PlaylistRepositories;
