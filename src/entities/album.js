export default class Album {
	constructor(title, artist, streamingSource, artURL='') {
		this.title = title;
		this.artist = artist;
		this.streamingSource = streamingSource;
		this.artURL = artURL;
	}
}