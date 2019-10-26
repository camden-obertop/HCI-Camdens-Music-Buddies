import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AlbumsBrowser from "../pages/AlbumsBrowser";
import PlayistsBrowser from "../pages/PlaylistsBrowser";
import SongsBrowser from "../pages/SongsBrowser";
import FriendsBrowser from "../pages/FriendsBrowser";

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
        path: "/songs",
        name: "Songs",
        component: SongsBrowser
      },
      {
        path: "/friends",
        name: "Friends",
        component: FriendsBrowser
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
