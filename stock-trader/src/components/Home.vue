<template>
  <div>
      <h4>Trade or View your Portfolio</h4>
      <h6>You may save or load your data</h6>
      <h6>Click on 'End day' to begin a new day</h6>
      <p>Your Funds : {{ funds }}</p>
  </div>
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
