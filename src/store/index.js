import Vue from "vue";
import Vuex from "vuex";
import { Song, Album, Playlist } from '../entities';
import { SONGS, DREAMLAND, RUN } from '../data/song_data';
import { NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT, SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS} from '../data/song_data';
import ALBUMS from '../data/album_data';
import router from "../router";

Vue.use(Vuex);

console.log(SONGS);

const state = {
	searchResults: [NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT, SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS, DREAMLAND],
	songs: SONGS,
	albums: ALBUMS,
	playlists: [
		new Playlist('Cool Songs', [DREAMLAND, RUN], './assets/foot-lettuce.png', 1),
		new Playlist('Cool Songs', [DREAMLAND, RUN], './assets/foot-lettuce.png', 2),
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
		state.queue.songs = [];
		state.queue.title = 'Queue';
		state.queueIndex = 0;
	},
	setQueueTitle: (state, title) => {
		state.queue.title = title;
	},
	setQueueIndex: (state, queueIndex) => {
		state.queueIndex = queueIndex;
	}
};

const actions = {
	// This will first determine if the item is a playlist, album, or
	// song and then properly react
	play: (state, playableItem) => {
		// pause the song that was previously being played
		if (state.getters.currentQueueSong) {
			state.getters.currentQueueSong.pause();
		} else {
			console.log('The current song is not defined so we can\'t pause it.');
		}

		// clear the queue and add this song to the queue
		state.commit('clearQueue');
		if (playableItem instanceof Song) {
			state.commit('addSongToQueue', playableItem);
		} else if (playableItem instanceof Playlist) {
			// TODO Maybe implement a bulk add mutation
			for (const song of playableItem.songs) {
				state.commit('addSongToQueue', song);
			}
			state.commit('setQueueTitle', playableItem.title);
		} else if (playableItem instanceof Album) {
			// TODO When we add the album's songs to the object, implement
			// functionality to commit all of their songs to the queue
			state.commit('setQueueTitle', playableItem.title);
		} else {
			console.error('Unable to figure out how to handle adding the object to the playlist.');
		}
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
	skipQueueBackwards: (state) => {
		state.dispatch('setQueueIndex', state.getters.queueIndex - 1);
		console.log(`Moving the queue backwards.`);
	},
	skipQueueForwards: (state) => {
		state.dispatch('setQueueIndex', state.getters.queueIndex + 1);
		console.log(`Moving the queue forwards.`);
	},
	// This takes the requested index and performs some operations on it
	// to make it a valid queue index.
	setQueueIndex: (state, index) => {
		console.log((index + state.getters.queueLength) % state.getters.queueLength);
		state.commit('setQueueIndex', (index + state.getters.queueLength) % state.getters.queueLength);
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
	searchResults: (state) => {
		return state.searchResults;
	},
	queue: (state) => {
		return state.queue;
	},
	// eslint-disable-next-line
	playlist: (state) => (playlistId) => {
		console.log(state.playlists.find(
      playlist => playlist.ID === parseInt(playlistId)
    ).songs);
		return state.playlists.find(
      playlist => playlist.ID === parseInt(playlistId)
    );
	},
	currentQueueSong: (state) => {
		const currentSong = state.queue.songs[state.queueIndex];
		const blankSong = new Song('', '', '', '', '');
		if (currentSong) {
			return currentSong;
		} else {
			return blankSong;
		}
	},
	queueLength: (state) => {
		return state.queue.songs.length;
	},
	queueIndex: (state) => {
		return state.queueIndex;
	}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
