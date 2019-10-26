export default class Playlist {
	constructor(name, songs) {
		this.name = name;
		this.songs = songs;
	}

	addSong(song) {
		this.songs.push(song);
	}

	removeSong(song) {
		this.songs.remove(song);
	}
}