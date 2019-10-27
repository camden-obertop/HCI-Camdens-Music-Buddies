export default class QueueSong {
	constructor(song) {
		this.song = song;
		this.audio = new Audio(song.audioURL);
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
}