new Vue({
  el: '#exercise',
  data: {
	on: true,
	dClass: 'shrink',
	attach: true,
	cClass: 'heighten',
	color: 'green',
	pb: {'width': 0}
  },
  methods: {
    startEffect: function() {
		var ctx = this;
		setInterval(function(){
			ctx.on = !ctx.on;
		}, 1000);
    },
    startProgress: function() {
		var ctx = this;
		setInterval(function(){
			++ctx.pb.width;
		}, 10);
    }
  }
});
