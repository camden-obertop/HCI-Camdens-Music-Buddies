import Vue from "vue";
import Vuex from "vuex";
import Song from '../entities/song';
import Playlist from '../entities/playlist';
import router from '../router';

Vue.use(Vuex);

const DREAMLAND = new Song('Dreamland', 'Chills', 'Spotify');
const RUN = new Song('Run', 'Awolnation', 'Youtube');

const state = {
	songs: [
		DREAMLAND,
		RUN
	],
	playlists: [
		new Playlist('Cool Songs', new Set([DREAMLAND, RUN]))
	],
	queue: {
		title: 'Queue',
		songs: [DREAMLAND, RUN]
	}
}

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
}

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
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});