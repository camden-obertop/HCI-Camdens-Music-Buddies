export default class Song {
	constructor(title, artist, platform, artURL, audioURL) {
		this.title = title;
		this.artist = artist;
		this.platform = platform;
		this.artURL = artURL;
		this.audioURL = audioURL;

		this.audio = new Audio(this.audioURL);
	}

	get duration() {
		return this.audio.duration;
	}

	set duration(time) {
		this.audio.fastSeek(time);
	}

	play() {
		this.audio.play();
	}

	pause() {
		this.audio.pause();
	}

	isPlaying() {
		return !this.audio.paused;
	}

	isEnded() {
		return this.audio.ended;
	}

	mute() {
		this.audio.muted = true;
	}

	unmute() {
		this.audio.muted = false;
	}

	isMuted() {
		return this.audio.muted;
	}
	
	toString() {
		return `${this.title} ${this.artist} ${this.platform} ${this.artURL} ${this.audioURL}`;
	}
}