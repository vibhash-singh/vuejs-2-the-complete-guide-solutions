<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <p> {{ text | reverse | countAppend}}</p>


                <p> {{ countAppendComputed }}</p>


            </div>
        </div>
    </div>
</template>

<script>
    import { strMixin } from './strMixin';

    export default {
      mixins: [strMixin],
      data() {
        return {
          'text' : 'Hello how are you?'
        }
      },
      filters: {
        reverse(val) {
          return val.split('').reverse().join('');
        }
      },
    }
</script>

<style>
</style>
