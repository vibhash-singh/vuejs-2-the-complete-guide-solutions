<template>
    <div class="container">
        <div class="row">
          <server-header></server-header>
        </div>
        <hr>
        <div class="row">
          <servers></servers>
          <server-details></server-details>
        </div>
        <hr>
        <div class="row">
          <server-footer></server-footer>
        </div>
    </div>
</template>

<script>
  import ServerHeader from "./ServerHeader.vue"
  import ServerFooter from "./ServerFooter.vue"
  import ServerDetails from "./ServerDetails.vue"
  import Servers from "./Servers.vue"

  export default {
    components: {
      "server-header": ServerHeader,
      "server-footer": ServerFooter,
      "server-details": ServerDetails,
      "servers": Servers
    }
  }
</script>

<style>

</style>
