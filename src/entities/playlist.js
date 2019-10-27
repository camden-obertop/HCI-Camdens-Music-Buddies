export default class Playlist {
  constructor(title, songs, artURL, ID) {
    this.title = title;
    this.songs = songs;
    this.artURL = artURL;
    this.ID = ID;
  }

  toString() {
    return `${this.title} ${this.songs.size} ${this.artURL} ${this.ID}`;
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    this.songs.remove(song);
  }
}
