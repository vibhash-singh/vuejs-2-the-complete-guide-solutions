new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
			showAlert: function() {
				alert("Hello");
			},
			storeData: function() {
				//console.log(value);
				this.value = event.target.value;
			},
			storeDataOnEnter: function() {
				this.value = event.target.value;
			}
				
		}
    });
