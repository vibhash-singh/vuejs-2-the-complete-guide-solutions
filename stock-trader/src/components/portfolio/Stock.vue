<template>
  <v-flex xs12 sm6 md4>
    <v-card raised class="mr-4 ml-4 mt-2 mb-2">
      <v-card-title primary-title>
        <h6>{{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</h6>
      </v-card-title>
      <v-card-actions>
        <v-text-field
          label="Quantity"
          type="number"
          v-model="quantity">
        </v-text-field>
        <v-btn
            @click="sellMyStock"
            :disabled="insufficientQuantity || quantity <= 0"
            >
            Sell
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sellMyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };

            console.log(order);
            this.sellStock(order);
            this.quantiy = 0;
        }
    }
  }
</script>
