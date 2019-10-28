import Vue from "vue";
import Vuex from "vuex";
import { Song, Album, Playlist } from '../entities';
import { SONGS, DREAMLAND, RUN } from '../data/song_data';
import { NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT, SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS} from '../data/song_data';
import { ALBUMS, ODDMENTS_ALBUM, NONAGON_INFINITY } from '../data/album_data';
import router from "../router";

Vue.use(Vuex);

const state = {
	searchResults: [NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT, SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS, DREAMLAND],
	songs: SONGS,
	favoriteSongs: new Set([DREAMLAND, NUMBER15_YOUTUBE]),
	albums: ALBUMS,
	favoriteAlbums: new Set([ODDMENTS_ALBUM, NONAGON_INFINITY]),
	playlists: [
		new Playlist('Cool Songs', [DREAMLAND, RUN], './assets/foot-lettuce.png', 1),
		new Playlist('Camden SONGSS', [DREAMLAND, NUMBER15], './assets/foot-lettuce.png', 2),
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
	addSongsToQueue: (state, songs) => {
		state.queue.songs.push(...songs);
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
	},
	addToFavoriteSongs: (state, song) => {
		state.favoriteSongs.add(song);
	},
	removeFromFavoriteSongs: (state, song) => {
		state.favoriteSongs.delete(song);
	},
	addToFavoriteAlbums: (state, album) => {
		state.favoriteAlbum.add(album);
	},
	removeFromFavoriteAlbums: (state, album) => {
		state.favoriteAlbum.deletex(album);
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
			state.commit('addSongsToQueue', playableItem.songs);
			state.commit('setQueueTitle', playableItem.title);
		} else if (playableItem instanceof Album) {
			state.commit('addSongsToQueue', playableItem.songs);
			state.commit('setQueueTitle', playableItem.title);
		} else {
			console.error('Unable to figure out how to handle adding the object to the playlist.');
		}
		state.getters.currentQueueSong.play();
	},
	togglePlaying: (state) => {
		if (state.getters.currentQueueSong.isPlaying()) {
			state.dispatch('pauseCurrentSong');
		} else {
			state.dispatch('playCurrentSong');
		}
	},
	toggleMute: (state) => {
		if (state.getters.currentQueueSong.isMuted()) {
			state.dispatch('unmuteCurrentSong');
		} else {
			state.dispatch('muteCurrentSong');
		}
	},
	restartQueueSong: (state) => {
		state.getters.currentQueueSong.restart();
	},
	muteCurrentSong: (state) => {
		console.log('Mute.');
		state.getters.currentQueueSong.mute();
	},
	unmuteCurrentSong: (state) => {
		console.log('UnMute.');
		state.getters.currentQueueSong.unmute();
	},
	playCurrentSong: (state) => {
		console.log(`Play.`);
		state.getters.currentQueueSong.play();
	},
	pauseCurrentSong: (state) => {
		console.log(`Pause.`);
		state.getters.currentQueueSong.pause();
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
		const newQueueIndex = (index + state.getters.queueLength) % state.getters.queueLength;
		if (newQueueIndex !== state.getters.queueIndex) {

			state.dispatch('pauseCurrentSong');
			state.commit('setQueueIndex', newQueueIndex);	
		}
		// It should always play the current song when a event tries to move, even if it's the same place
		state.dispatch('playCurrentSong');
	},
	navigateToPage: (state, pageName) => {
		if (router.history.current.name !== pageName) {
			router.push({ name: pageName });
		}
	},
	toggleFavorite: (state, favoritableItem) => {
		if (state.getters.isFavorited(favoritableItem)) {
			state.dispatch('unfavorite', favoritableItem);
		} else {
			state.dispatch('favorite', favoritableItem);
		}
	},
	favorite: (state, favoritableItem) => {
		if (favoritableItem instanceof Song) {
			state.commit('addToFavoriteSongs', favoritableItem);
		} else if(favoritableItem instanceof Album) {
			state.commit('addToFavoriteAlbums', favoritableItem);
		} else {
			console.log('Unable to favorite the item.');
			console.log(favoritableItem);
		}
	},
	unfavorite: (state, favoritableItem) => {
		if (favoritableItem instanceof Song) {
			state.commit('removeFromFavoriteSongs', favoritableItem);
		} else if(favoritableItem instanceof Album) {
			state.commit('removeFromFavoriteAlbums', favoritableItem);
		} else {
			console.log('Unable to favorite the item.');
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
	playlist: (state) => (playlistId) => {
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
	},
	favoriteSongs: (state) => {
		return Array.from(state.favoriteSongs);
	},
	favoriteAlbums: (state) => {
		return Array.from(state.favoriteAlbums);
	},
	isFavorited: (state) => (favoritableItem) => {
		if (favoritableItem instanceof Song) {
			return state.favoriteSongs.has(favoritableItem);
		} else if(favoritableItem instanceof Album) {
			return state.favoriteAlbums.has(favoritableItem);
		} else {
			console.log('Unable to check if the item is favorited.');
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
