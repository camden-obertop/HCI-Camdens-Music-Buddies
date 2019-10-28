export default class Album {
  constructor(title, artist, platform, artURL, songs) {
    this.title = title;
    this.artist = artist;
    this.platform = platform;
    this.artURL = artURL;
    this.songs = songs;
  }

  toString() {
    return `${this.title} ${this.artist} ${this.platform} ${this.artURL}`;
  }
}
