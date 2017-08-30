<template>
    <div class="container">
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    </div>
</template>

<script>
  import QuoteGrid from "./components/QuoteGrid.vue";
  import NewQuote from "./components/NewQuote.vue"

    export default {
        data: function() {
          return {
            quotes: [
              'Just a quote to see something'
            ],
            maxQuotes: 10
          }
        },
        components: {
          appNewQuote: NewQuote,
          appQuoteGrid: QuoteGrid
        },
        methods :{
          newQuote(quote) {
            this.quotes.push(quote);
          },
          deleteQuote(index) {
            this.quotes.splice(index, 1);
          }
        }
    }
</script>

<style>
</style>
