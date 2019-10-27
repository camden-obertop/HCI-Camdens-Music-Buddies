export default class Song {
  constructor(title, artist, album, platform, artURL = "") {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.platform = platform;
    this.artURL = artURL;
  }

  toString() {
    return `${this.title} ${this.artist} ${this.platform} ${this.artURL}`;
  }
}
