export default class Song {
	constructor(title, artist, platform, artURL='') {
		this.title = title;
		this.artist = artist;
		this.platform = platform;
		this.artURL = artURL;
	}
	
	toString() {
		return `${this.title} ${this.artist} ${this.platform} ${this.artURL}`;
	}
}