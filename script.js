
	const app = Vue.createApp({
		data() {
			return {
				title: "Say something else",
				'some': 'stuff',

				todos: '',

				complete: 0,
				incomplete: 0,
			};
		},

		created() {
			fetch('https://api.jsonbin.io/b/5fb57b654144f562a5eff509')
				.then(r => r.json())
				.then(json => {
					this.todos = json.todos;
					for (let o of this.todos) {
						if (o.done) {
							this.complete ++;
						}
						else {
							this.incomplete ++;
						}
					}
				});

			console.log("Your app was created!");
			console.log(`You have ${this.complete} completed items`);
		},

		methods: {
			onclick(item) {
				if (item.done) {
					this.complete--;
					this.incomplete++;
				}
				else {
					this.complete++;
					this.incomplete--;
				}

				item.done = !item.done;
			},

			plural(n) {
				if (n == 1) {
					return '';
				}
				else {
					return 's';
				}
			},


		},

		computed: {
			total() {
				console.log("total() was called");
				return this.complete + this.incomplete;
			},
		},

	});
		
	const vm = app.mount('#app');


		
