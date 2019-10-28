<template>
    <v-container>
        <v-row justify="center"><p class="headline">Language: <v-select :items="languages" /></p></v-row>
        <v-row justify="center"><p class="headline">Streaming Quality: <v-select :items="quality" /></p></v-row>
        <v-row justify="center"><p class="headline">Autoplay: <v-select :items="autoplay" /></p></v-row>
        <v-row justify="center"><p class="headline">Add Sreaming Service: <v-autocomplete label="Add" :items="services" /></p></v-row>
    </v-container>
</template>

<script>
export default {
    name: "settingsBrowser",
    data: () => ({
        languages: ["English", "French", "Pirate", "Chinese"],
        quality: ["Low", "High"],
        autoplay: ["On", "Off"],
        services: ["Spotify", "Youtube"]
    })
}
</script>

<style scoped>

</style>