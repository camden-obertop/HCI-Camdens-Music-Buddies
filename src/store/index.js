import Vue from "vue";
import Vuex from "vuex";
import Song from '../entities/song';
import Playlist from '../entities/playlist';
import router from '../router';

Vue.use(Vuex);

const DREAMLAND = new Song('Dreamland', 'Chills', 'Spotify', './assets/dreamland.jpg');
const RUN = new Song('Run', 'Awolnation', 'Youtube', './assets/awolnation.jpg');

const IN_RAINBOW = new Album("In Rainbows", "Radiohead", "Spotify", "./assets/in-rainbows.jpg");
const FACE_STABBERS = new Album("Face Stabbers","Oh Sees", "Spotify", "./assets/face-stabbers.jpg");
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
	}
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
	}
};

const actions = {
	playSong: (state, song) => {
		// TODO Add song playing here.
		song
		// eslint-disable-next-line no-console
		console.log(`Attempting to play the song ${song.title}.`);
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
	songs: (state) => {
		return state.songs;
	},
	queue: (state) => {
		return state.queue;
	}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});