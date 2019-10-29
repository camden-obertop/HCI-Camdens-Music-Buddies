export default class Song {
	constructor(title, artist, platform, artURL, albumTitle, audioURL='./assets/Music/audio_not_found.mp3') {
		this.title = title;
		this.artist = artist;
		this.platform = platform;
		this.artURL = artURL;
		this.albumTitle = albumTitle;
		this.audioURL = audioURL;
		
		this.audio = new Audio(this.audioURL);
	}

	get duration() {
		return this.audio.duration;
	}

	get currentTime() {
		return this.audio.currentTime;
	}
	set currentTime(newTime) {
		this.audio.currentTime = newTime;
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

	restart() {
		this.currentTime = 0;
	}
	
	toString() {
		return `${this.title} ${this.artist} ${this.platform} ${this.artURL} ${this.audioURL}`;
	}
}