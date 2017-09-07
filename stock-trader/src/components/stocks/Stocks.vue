<template>
  <v-app>
    <v-container>
      <v-layout wrap>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
      </v-layout>
    </v-container>
</v-app>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
          appStock: Stock
        },
        computed:  {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style>

</style>
