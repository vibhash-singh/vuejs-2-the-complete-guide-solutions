<template>
  <v-toolbar class="red">
    <v-toolbar-title class="white--text">
      <router-link to="/" activeClass="active" style="text-decoration:none"> Stock Trader </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link style="margin-right:10px;" to="/portfolio" class="m-2">Portfolio</router-link>
    <router-link style="margin-right:10px;" to="/stocks">Stocks</router-link>
      <router-link style="margin-right:10px;" to="/stocks">End Day</router-link>
    <v-menu top offset-y>
      <a href="#" slot="activator" style="margin-right:10px;">Save & Load</a>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Save</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Load</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <a>Funds : {{ funds }}</a>
  </v-toolbar>
</template>


<script>
    export default {
        computed : {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>
