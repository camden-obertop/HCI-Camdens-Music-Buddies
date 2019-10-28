<template>
    <v-container>
        <v-row justify="left"><p class="headline" style="color: #FFFFFF; font: 22px 'Poetsen One', normal !important;">Language: <v-select :items="languages" /></p></v-row>
        <v-row justify="left"><p class="headline" style="color: #FFFFFF; font: 22px 'Poetsen One', normal !important;">Streaming Quality: <v-select :items="quality" /></p></v-row>
        <v-row justify="left"><p class="headline" style="color: #FFFFFF; font: 22px 'Poetsen One', normal !important;">Autoplay: <v-select :items="autoplay" /></p></v-row>
        <v-row justify="left"><p class="headline" style="color: #FFFFFF; font: 22px 'Poetsen One', normal !important;">Add Streaming Service: <v-autocomplete dark label="Add" :items="services" /></p></v-row>
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