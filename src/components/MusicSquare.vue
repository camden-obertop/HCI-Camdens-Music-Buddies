<template>
    <div width="200px">
    <v-hover v-slot:default="{ hover }">
        <v-card
        :class="{ 'on-hover': hover }"
        width="200px"
        elevation="0"
        >
        <v-img src="../assets/chills-album-cover.jpeg">
            <v-card-actions class="align-end">
            <v-btn
                :class="{ 'show-btns': hover }"
                :color="hover && starSelected ? 'yellow' : transparent"
                @click="starSelected = !starSelected"
                icon
            >
                <v-icon
                :class="{ 'show-btns': hover }"
                :color="hover && starSelected ? 'yellow' : transparent"
                >
                mdi-star
                </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-menu offset-x>
                <template v-slot:activator="{ on }">
                <v-btn
                    :class="{ 'show-btns': hover }"
                    :color="transparent"
                    v-on="on"
                    icon
                >
                    <v-icon :class="{ 'show-btns': hover }" :color="transparent">
                    mdi-plus
                    </v-icon>
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                    v-for="(item, index) in playlists"
                    :key="index"
                    @click="selectedPlaylist = index + 1"
                    ><v-list-item-title>{{
                    item.title
                    }}</v-list-item-title></v-list-item
                >
                </v-list>
            </v-menu>
            </v-card-actions>
        </v-img>
        <v-card-text class="ma-0 pa-0 text-center title">Number 15 Mixtape</v-card-text>
        <v-card-text class="ma-0 pa-0 text-center subtitle-2">Chills</v-card-text>
        </v-card>
    </v-hover>

    </div>
</template>

<style scoped>
.v-card {
  transition: opacity 0.2s ease-in-out;
  opacity: 0.9;
}

.v-card:not(.on-hover) {
  opacity: 1;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
export default {
  data: () => ({
    starSelected: false,
    selectedPlaylist: 0,
    transparent: "rgba(255, 255, 255, 0)",
    playlists: [
      { title: "Playlist 1" },
      { title: "Playlist 2" },
      { title: "Playlist 3" }
    ]
  })
};
</script>
