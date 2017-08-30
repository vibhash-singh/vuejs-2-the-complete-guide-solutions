<template>
  <li class="list-group-item" @click="serverInfo">
    Server #{{ server.id }}
  </li>
</template>

<script>
  import { eventBus } from "../../main"

  export default {
    props: ['server'],
     methods: {
      serverInfo() {
        eventBus.$emit('serverInfo', this.server);
      }
    },
  }
</script>
