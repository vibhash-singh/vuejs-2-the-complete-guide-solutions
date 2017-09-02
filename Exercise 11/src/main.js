import Vue from 'vue'
import App from './App.vue'

Vue.filter('countAppend', function(val) {
    return val + '(' + val.length + ')';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
