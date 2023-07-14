class Song {
  constructor(id, title, artist, url, isPlaying, isPlayingCount) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.url = url;
    this.isPlaying = isPlaying;
    this.isPlayingCount = isPlayingCount;
  }
}

module.exports = Song;
