import Vue from "vue"; import Vuex from "vuex"; import { Song, Album, Playlist
} from '../entities'; import { SONGS, DREAMLAND, REDEYES, RUN } from
'../data/song_data'; import { NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT,
SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS} from '../data/song_data';
import { ALBUMS, ODDMENTS_ALBUM, NONAGON_INFINITY } from '../data/album_data';
import router from "../router";

Vue.use(Vuex);

const state = {
	searchResults: new Array(NUMBER15, NUMBER15_YOUTUBE, HARD_IN_THE_PAINT, SWAP_MEET, FRIDAY_NIGHT, SIDELINED, NUMBER15_LYRICS, DREAMLAND),
	drawer: true,
	songs: SONGS,
	favoriteSongs: new Array(REDEYES, NUMBER15_YOUTUBE),
	albums: ALBUMS,
	favoriteAlbums: new Array(ODDMENTS_ALBUM, NONAGON_INFINITY),
	playlists: [
		new Playlist('Cool Songs', [RUN], './assets/foot-lettuce.png', 1),
	],
	queue: {
		title: 'Queue',
		songs: [RUN]
	},
	// This refers to the index of the current song in the queue that
	// is being played.
	queueIndex: 0
};

const mutations = {
	addSongToQueue: (state, song) => {
		state.queue.songs.push(song);
	},
	addSongsToQueue: (state, songs) => {
		state.queue.songs.push(...songs);
	},
	// removeSongFromQueue: (state, song) => {
	// 	state.queue.songs = state.queue.songs.filter(s => s != song);
	// },
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
	toggleDrawer: (state) => {
		state.drawer = !state.drawer;
	},
	addToFavoriteSongs: (state, song) => {
		state.favoriteSongs.push(song);
	},
	removeFromFavoriteSongs: (state, song) => {
		state.favoriteSongs.splice(state.favoriteSongs.indexOf(song), 1);
	},
	addToFavoriteAlbums: (state, album) => {
		state.favoriteAlbums.push(album);
	},
	removeFromFavoriteAlbums: (state, album) => {
		state.favoriteAlbums.splice(state.favoriteAlbums.indexOf(album), 1);
	},
	// TODO These might not work, because they aren't using instance methods
	addSongToPlaylist: (state, {playlist, song}) => {
		let playlists = state.playlists;
		playlists.find(p => p === playlist).songs.push(song);
		Vue.set(state, 'playlists', playlists);
	},
	removeSongFromPlaylist: (state, {playlist, song}) => {
		let playlists = state.playlists;
		// eslint-disable-next-line no-unused-vars
		let selectedPlaylist = playlists.find(playlist);
		selectedPlaylist = selectedPlaylist.songs.filter(s => s !== song);
		Vue.set(state, 'playlists', playlists);
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
			// console.error('The current song is not defined so we can\'t pause it.');
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
			// console.error('Unable to figure out how to handle adding the object to the playlist.');
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
			// console.error('Unable to favorite the item.');
		}
	},
	unfavorite: (state, favoritableItem) => {
		if (favoritableItem instanceof Song) {
			state.commit('removeFromFavoriteSongs', favoritableItem);
		} else if(favoritableItem instanceof Album) {
			state.commit('removeFromFavoriteAlbums', favoritableItem);
		} else {
			// console.error('Unable to favorite the item.');
		}
	},
	toggleInPlaylist: (state, {playlist, addableItem}) => {
		if (addableItem instanceof Song) {
			if (state.getters.isInPlaylist(playlist, addableItem)) {
				state.commit('removeSongFromPlaylist', {playlist: playlist, song: addableItem});
			} else {
				state.commit('addSongToPlaylist', {playlist: playlist, song: addableItem});
			}
		} else if(addableItem instanceof Album) {
			// TODO Implement this behavior
		} else {
			console.log('Unable to toggle this item being in a playlist.');
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
		return state.favoriteSongs;
	},
	favoriteAlbums: (state) => {
		return state.favoriteAlbums;
	},
	isFavorited: (state) => (favoritableItem) => {
		if (favoritableItem instanceof Song) {
			return state.favoriteSongs.includes(favoritableItem);
		} else if(favoritableItem instanceof Album) {
			return state.favoriteAlbums.includes(favoritableItem);
		} else {
			// console.error('Unable to check if the item is favorited.');
		}
	},
	isInPlaylist: (state) => (playlist, song) => {
		return song in state.playlists.find(p => p == playlist).songs;
	}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
