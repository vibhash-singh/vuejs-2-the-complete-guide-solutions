new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning : false,
		turns : []
	},
	methods: {
		startGame: function() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.gameRunning = true;
			this.turns = [];
		},
		calcDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1,  min);
		},
		attack: function() {
			//return a num between [10, 20]
			var damage = this.calcDamage(10, 20);
			this.monsterHealth -= damage;
			
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster for " + damage
			});
			
			if (this.checkWin()) {
				return;
			}
		
			this.monsterAttack();
		},
		specialAttack: function() {
			//return a num between [10, 20]
			var damage = this.calcDamage(10, 20);
			this.monsterHealth -= damage;

			this.turns.unshift({
				isPlayer: true,
				text: "Player hits hard Monster for " + damage
			})
			
			if (this.checkWin()) {
				return;
			}
		
			this.monsterAttack();
		},
		heal: function() {
			if (this.palyerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			
			this.turns.unshift({
				isPlayer: true,
				text: "Player heals for 10"
			})
			
			this.monsterAttack();
		},
		giveUp: function() {
			this.gameRunning = false;
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm("You won. New game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0){
				if (confirm("You lost. New game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}	
			}
		},
		monsterAttack: function() {
			//return a num between [5, 12]
			var damage = this.calcDamage(5, 12);
			this.playerHealth -= damage	
			this.checkWin();
			
			this.turns.unshift({
				isPlayer: false,
				text: "Monster hits Player for " + damage
			});
			
		}
	}
});
