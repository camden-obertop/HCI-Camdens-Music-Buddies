import Vue from "vue";
import Vuex from "vuex";
import { Song, Album, Playlist } from '../entities';
import router from '../router';

Vue.use(Vuex);

const DREAMLAND = new Song('Dreamland', 'Chills', 'Spotify', './assets/dreamland.jpg', 'http://popplers5.bandcamp.com/download/track?enc=mp3-128&id=1269403107&stream=1');
const RUN = new Song('Run', 'Awolnation', 'Youtube', './assets/awolnation.jpg');

const IN_RAINBOW = new Album("In Rainbows", "Radiohead", "Spotify", "./assets/in-rainbows.jpg");
const FACE_STABBERS = new Album("Face Stabbers","Oh Sees", "Spotify", "./assets/face-stabber.jpg");
const JINX = new Album("Jinx","Crumb","Spotify", "./assets/jinx.png");
const NONAGON_INFINITY = new Album("Nonagon Infinity","King Gizzard","Spotify" ,"./assets/nonagon-infinity.jpg");
const ODDMENTS = new Album("Oddments","King Gizzard", "Spotify", "./assets/oddments.jpg");
const OK_COMPUTER = new Album("Ok Computer","Radiohead", "Spotify", "./assets/ok-computer.jpg");

const state = {
	songs: [
		DREAMLAND,
		RUN
	],
	albums: [
		IN_RAINBOW, FACE_STABBERS, JINX, NONAGON_INFINITY,
		ODDMENTS, OK_COMPUTER
	],
	playlists: [
		new Playlist('Cool Songs', new Set([DREAMLAND, RUN]), './assets/foot-lettuce.png'),
		new Playlist('Cool Songs', new Set([DREAMLAND, RUN]), './assets/foot-lettuce.png'),
	],
	queue: {
		title: 'Queue',
		songs: [DREAMLAND, RUN]
	},
	// This refers to the index of the current song in the queue that
	// is being played.
	queueIndex: 0
};

const mutations = {
	addSongToPlaylist: (state, playlist, song) => {
		state.playlists.find(playlist).addSong(song);
	},
	removeSongFromPlayList: (state, playlist, song) => {
		state.playlists.find(playlist).removeSong(song);
	},
	addSongToQueue: (state, song) => {
		state.queue.songs.push(song);
	},
	removeSongFromQueue: (state, song) => {
		state.queue.songs = state.queue.songs.filter(s => s != song);
	},
	clearQueue: (state) => {
		state.queue = [];
		state.queueIndex = 0;
	}
};

const actions = {
	playSong: (state, song) => {
		// pause the song that was previously being played
		state.getters.currentSong.pause();

		// clear the queue and add this song to the queue
		state.commit('clearQueue');
		state.commit('addSongToQueue', song);

		// play our newly added song
		state.getters.currentQueueSong.play();
	},
	togglePlaying: (state) => {
		console.log(`Toggling playing status to:`);
		if (state.getters.currentQueueSong) {
			if (state.getters.currentQueueSong.isPlaying()) {
				state.getters.currentQueueSong.pause();
				console.log(`Pause.`);
			} else {
				state.getters.currentQueueSong.play();
				console.log(`Play.`);
			}
		} else {
			console.log(`No current song.`);
		}
	},
	toggleMute: (state) => {
		if (state.getters.currentQueueSong) {
			if (state.getters.currentQueueSong.isMuted()) {
			state.getters.currentQueueSong.unmute();
			} else {
				state.getters.currentQueueSong.mute();
			}
		}
	},
	navigateToPage: (state, pageName) => {
		if (router.history.current.name !== pageName) {
			router.push({ name: pageName });
		}
	}
};

const getters = {
	playlists: (state) => {
		return state.playlists;
	},
	albums: (state) => {
		return state.albums;
	},
	songs: (state) => {
		return state.songs;
	},
	queue: (state) => {
		return state.queue;
	},
	currentQueueSong: (state) => {
		const currentSong = state.queue.songs[state.queueIndex];
		const blankSong = new Song('', '', '', '', '');
		if(currentSong) {
			return currentSong;
		} else {
			return blankSong;
		}
	}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});