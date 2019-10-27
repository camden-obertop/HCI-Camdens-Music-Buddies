<template>
    <v-data-table :headers="headers" :items="songs"></v-data-table>
</template>

<script>
export default {
    name: "playlist",
    data: () => ({
        headers: [
            {text: "Song", value: "song"},
            {text: "Artist", value: "artist"},
            {text: "Album", value: "album"},
            {text: "Platform", value: "platform"}
        ],
        songs: [
            {song: "Number 15 Remix", artist: "Chills", album: "Number 15 Mixtape", platform: "Spotify"},
        ]
    })
}
</script>

<style scoped>

</style>