<template>
    <v-app>
      <v-container>
        <v-layout wrap>
          <app-stock v-for="stock in stockPortfolio" :stock="stock"></app-stock>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters([
                'stockPortfolio'
            ])
        },
        components: {
          appStock: Stock
        }
    }
</script>
