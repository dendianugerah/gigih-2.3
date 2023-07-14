class PlaylistRepositories {
  constructor() {
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  playSong(song) {
    song.isPlaying = true;
    song.isPlayingCount += 1;
  }

  getAllSong(sort_by, order_by) {
    if (sort_by === "play_count") {
      this.songs.sort((a, b) => {
        if (order_by === "desc") {
          return b.isPlayingCount - a.isPlayingCount;
        } else {
          return a.isPlayingCount - b.isPlayingCount;
        }
      });
    }
    return this.songs;
  }

  getPlayingSong() {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].isPlaying) {
        return this.songs[i];
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
