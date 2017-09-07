<template>
  <v-flex xs12 sm6 md4>
    <v-card raised class="mr-4 ml-4 mt-2 mb-2">
      <v-card-title primary-title>
        <h6>{{ stock.name }} (Price: {{ stock.price }})</h6>
      </v-card-title>
      <v-card-actions>
        <v-text-field
          label="Quantity"
          v-model="quantity">
        </v-text-field>
        <v-btn
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
            >
            Buy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>

  export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };

            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
  }
</script>
