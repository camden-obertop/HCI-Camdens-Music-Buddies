import Vue from "vue";
import Vuex from "vuex";
import Song from '../entities/song';
import Album from '../entities/album';
import Playlist from '../entities/playlist';
import router from '../router';

Vue.use(Vuex);

/* Singles */
const DREAMLAND = new Song('Dreamland', 'Chills', 'Spotify', './assets/dreamland.jpg', '', './assets/Dreamland.mp3');
const NUMBER15 = new Song('Number 15', 'Chills', 'Spotify', './assets/chills-album-cover.jpeg', '', './assets/Music/Number 15.mp3');
const REDEYES = new Song('Red Eyes', 'Chills', 'Spotify', './assets/sidelined.jpg', '', './assets/Music/Red Eyes.mp3');
const RUN = new Song('Run', 'Awolnation', 'Youtube', './assets/awolnation.jpg', '', '');

/* In Rainbows */
const FIFTEEN_STEP = new Song('15 Step', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const BODY_SNATCHERS = new Song('Bodysnatchers', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const NUDE = new Song('Nude', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const ARPEGGI = new Song('Weird Fishes/Arpeggi', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const ALL_I_NEED = new Song('All I Need', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const FAUST_ARP = new Song('Faust Arp', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const RECKONER = new Song('Reckoner', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const HOUSE_OF_CARDS = new Song('House of Cards', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const JIGSAW_FALLING_INTO_PLACE = new Song('Jigsaw Falling Into Place', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');
const VIDEO_TAPE = new Song('Videotape', 'Radiohead', 'Spotify', './assets/in-rainbows.jpg', 'In Rainbows', '');

/* Face Stabber */
const THE_DAILY_HEAVY = new Song('The Daily Heavy', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const THE_EXPERIMENTER = new Song('The Experimenter', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const FACE_STABBER = new Song('Face Stabber', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const SNICKERSNEE = new Song('Snickersnee', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const FU_XI = new Song('Fu Xi', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const SCUTUM_AND_SCORPIUS = new Song('Scutum & Scorpius', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const GHOLU = new Song('Gholü', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const POISONED_STONES = new Song('Poisoned Stones', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const SS_LUKERS_MOM = new Song('S.S. Luker\'s Mom' , 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const HEARTWORM = new Song('Heartworm', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const TOGETHER_TOMORROW = new Song('Together Tomorrow', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const CAPTAIN_LOOSLEY = new Song('Captain Loosley', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');
const HENCHLOCK = new Song('Henchlock', 'Thee Oh Sees', 'Spotify', './assets/face-stabber.jpg', 'Face Stabber', '');

/* Jinx */
const CRACKING = new Song('Cracking', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const NINA = new Song('Nina', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const GHOSTRIDE = new Song('Ghostride', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const FALL_DOWN = new Song('Fall Down', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const MR = new Song('M.R.', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const THE_LETTER = new Song('The Letter', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const PART_III = new Song('Part III', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const AND_IT_NEVER_ENDS = new Song('And It Never Ends', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const FACES = new Song('Faces', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');
const JINX = new Song('Jinx', 'Crumb', 'Spotify', './assets/jinx.png', 'Jinx', '');

/* Nonagon Infinity */
const ROBOT_STOP = new Song('Robot Stop', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const BIG_FIG_WASP = new Song('Big Fig Wasp', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const GAMMA_KNIFE = new Song('Gamma Knife', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const PEOPLE_VULTURES = new Song('People-Vultures', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const MR_BEAT = new Song('Mr. Beat', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const EVIL_DEATH_ROLL = new Song('Evil Death Roll', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const INVISIBLE_FACE = new Song('Invisible Face', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const WAH_WAH = new Song('Wah Wah', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');
const ROAD_TRAIN = new Song('Road Train', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/nonagon-infinity.jpg', 'Nonagon Infinity', '');

/* Oddments */
const ALLUDA_MAJAKA = new Song('Alluda Majaka', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const STRESSIN = new Song('Stressin\'', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const VEGEMITE = new Song('Vegemite', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const ITS_GOT_OLD = new Song('It\'s Got Old', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const WORK_THIS_TIME = new Song('Work This Time', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const ABABCD = new Song('ABABCd', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const SLEEPWALKER = new Song('Sleepwalker', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const HOT_WAX = new Song('Hot Wax', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const CRYING = new Song('Crying', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const PIPE_DREAM = new Song('Pipe-Dream', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const HOMELESS_MAN_IN_ADDIDAS = new Song('Homeless Man In Addidas', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');
const ODDMENTS = new Song('Oddments', 'King Gizzard & The Lizard Wizard', 'Spotify', './assets/oddments.jpg', 'Oddments', '');

/* OK Computer */
const AIRBAG = new Song('Airbag', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const PARANOID_ANDROID = new Song('Paranoid Android', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const SUBTERRANEAN_HOMESICK_ALIEN = new Song('Subterranean Homesick Alien', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const EXIT_MUSIC = new Song('Exit Music (For a Film)', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const LET_DOWN = new Song('Let Down', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const KARMA_POLICE = new Song('Karma Police', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const FITTER_HAPPIER = new Song('Fitter Happier', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const ELECTIONEERING = new Song('Electioneering', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const CLIMBING_UP_THE_WALLS = new Song('Climbing Up the Walls', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const NO_SURPRISES = new Song('No Surprises', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const LUCKY = new Song('Lucky', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');
const THE_TOURIST = new Song('The Tourist', 'Radiohead', 'Spotify', './assets/ok-computer.jpg', 'OK Computer', '');

const IN_RAINBOWS = new Album("In Rainbows", "Radiohead", "Spotify", "./assets/in-rainbows.jpg",
[FIFTEEN_STEP,
BODY_SNATCHERS,
NUDE,
ARPEGGI,
ALL_I_NEED,
FAUST_ARP,
RECKONER,
HOUSE_OF_CARDS,
JIGSAW_FALLING_INTO_PLACE,
VIDEO_TAPE]);
const FACE_STABBER_ALBUM = new Album("Face Stabber","Oh Sees", "Spotify", "./assets/face-stabber.jpg",
[THE_DAILY_HEAVY,
THE_EXPERIMENTER,
FACE_STABBER,
SNICKERSNEE,
FU_XI,
SCUTUM_AND_SCORPIUS,
GHOLU,
POISONED_STONES,
SS_LUKERS_MOM,
HEARTWORM,
TOGETHER_TOMORROW,
CAPTAIN_LOOSLEY,
HENCHLOCK]);
const JINX_ALBUM = new Album("Jinx","Crumb","Spotify", "./assets/jinx.png",
[CRACKING,
NINA,
GHOSTRIDE,
FALL_DOWN,
MR,
THE_LETTER,
PART_III,
AND_IT_NEVER_ENDS,
FACES,
JINX]);
const NONAGON_INFINITY = new Album("Nonagon Infinity","King Gizzard","Spotify" ,"./assets/nonagon-infinity.jpg",
[ROBOT_STOP,
BIG_FIG_WASP,
GAMMA_KNIFE,
PEOPLE_VULTURES,
MR_BEAT,
EVIL_DEATH_ROLL,
INVISIBLE_FACE,
WAH_WAH,
ROAD_TRAIN]);
const ODDMENTS_ALBUM = new Album("Oddments","King Gizzard", "Spotify", "./assets/oddments.jpg",
[ALLUDA_MAJAKA,
STRESSIN,
VEGEMITE,
ITS_GOT_OLD,
WORK_THIS_TIME,
ABABCD,
SLEEPWALKER,
HOT_WAX,
CRYING,
PIPE_DREAM,
HOMELESS_MAN_IN_ADDIDAS,
ODDMENTS]);
const OK_COMPUTER = new Album("OK Computer","Radiohead", "Spotify", "./assets/ok-computer.jpg",
[AIRBAG,
PARANOID_ANDROID,
SUBTERRANEAN_HOMESICK_ALIEN,
EXIT_MUSIC,
LET_DOWN,
KARMA_POLICE,
FITTER_HAPPIER,
ELECTIONEERING,
CLIMBING_UP_THE_WALLS,
NO_SURPRISES,
LUCKY,
THE_TOURIST]);

const state = {
	songs: [
		DREAMLAND,
		NUMBER15,
		REDEYES,
		RUN,
		FIFTEEN_STEP,
		BODY_SNATCHERS,
		NUDE,
		ARPEGGI,
		ALL_I_NEED,
		FAUST_ARP,
		RECKONER,
		HOUSE_OF_CARDS,
		JIGSAW_FALLING_INTO_PLACE,
		VIDEO_TAPE,
		THE_DAILY_HEAVY,
		THE_EXPERIMENTER,
		FACE_STABBER,
		SNICKERSNEE,
		FU_XI,
		SCUTUM_AND_SCORPIUS,
		GHOLU,
		POISONED_STONES,
		SS_LUKERS_MOM,
		HEARTWORM,
		TOGETHER_TOMORROW,
		CAPTAIN_LOOSLEY,
		HENCHLOCK,
		CRACKING,
		NINA,
		GHOSTRIDE,
		FALL_DOWN,
		MR,
		THE_LETTER,
		PART_III,
		AND_IT_NEVER_ENDS,
		FACES,
		JINX,
		ROBOT_STOP,
		BIG_FIG_WASP,
		GAMMA_KNIFE,
		PEOPLE_VULTURES,
		MR_BEAT,
		EVIL_DEATH_ROLL,
		INVISIBLE_FACE,
		WAH_WAH,
		ROAD_TRAIN,
		ALLUDA_MAJAKA,
		STRESSIN,
		VEGEMITE,
		ITS_GOT_OLD,
		WORK_THIS_TIME,
		ABABCD,
		SLEEPWALKER,
		HOT_WAX,
		CRYING,
		PIPE_DREAM,
		HOMELESS_MAN_IN_ADDIDAS,
		ODDMENTS,
		AIRBAG,
		PARANOID_ANDROID,
		SUBTERRANEAN_HOMESICK_ALIEN,
		EXIT_MUSIC,
		LET_DOWN,
		KARMA_POLICE,
		FITTER_HAPPIER,
		ELECTIONEERING,
		CLIMBING_UP_THE_WALLS,
		NO_SURPRISES,
		LUCKY,
		THE_TOURIST
	],
	albums: [
		IN_RAINBOWS, FACE_STABBER_ALBUM, JINX_ALBUM, NONAGON_INFINITY,
		ODDMENTS_ALBUM, OK_COMPUTER
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
	albums: (state) => {
		return state.albums;
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