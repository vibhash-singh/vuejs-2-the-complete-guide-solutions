<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        appHeader: Header
    },
    created() {
        this.$store.dispatch('initStocks');
    }
}
</script>

<style>

</style>
