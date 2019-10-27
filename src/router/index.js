import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout";
import AlbumsBrowser from "../pages/AlbumsBrowser";
import FriendsBrowser from "../pages/FriendsBrowser";
import Home from "../pages/Home";
import PlayistsBrowser from "../pages/PlaylistsBrowser";
import SearchResults from "../pages/SearchResults";
import SongsBrowser from "../pages/SongsBrowser";
import PlaylistBrowser from "../pages/PlaylistBrowser";
import SettingsBrowser from "../pages/SettingsBrowser";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/albums",
        name: "Albums",
        component: AlbumsBrowser
      },
      {
        path: "/playlists",
        name: "Playlists",
        component: PlayistsBrowser
      },
      {
        path: "/playlists/:playlistID",
        name: "Playlist",
        component: PlaylistBrowser
      },
      {
        path: "/songs",
        name: "Songs",
        component: SongsBrowser
      },
      {
        path: "/friends",
        name: "Friends",
        component: FriendsBrowser
      },
      {
        path: "/searchResults",
        name: "Search",
        component: SearchResults
      },
      {
        path: "/settings",
        name: "Settings",
        component: SettingsBrowser
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
