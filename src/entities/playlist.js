export default class Playlist {
	constructor(title, songs, artURL) {
		this.title = title;
		this.songs = songs;
		this.artURL = artURL;
	}

	addSong(song) {
		this.songs.push(song);
	}

	removeSong(song) {
		this.songs.remove(song);
	}
}