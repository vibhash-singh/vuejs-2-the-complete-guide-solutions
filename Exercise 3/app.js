new Vue({
        el: '#exercise',
        data: {
            value: 0,
            
        },
        computed: {
			result: function() {
						return (this.value != 37) ? "not there yet" :  "done";
			}
		},
		watch: {
			result: function(){
					var ctx = this;
					
					setTimeout(function() {
						ctx.value = 0;
				}, 5000);
			}
		}		
        
    });
