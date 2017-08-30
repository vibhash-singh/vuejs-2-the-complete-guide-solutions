<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Select a server</p>
        <p v-else>Server # {{server.id}} {{server.status}}</p>
    </div>

</template>

<script>
  import { eventBus } from "../../main"

  export default {
    data: function() {
      return { server : null }
    },
    created() {
      eventBus.$on('serverInfo', (server) => {
        this.server = server;
      });
    }
  }

</script>


<style>

</style>
