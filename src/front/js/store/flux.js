
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			auth: false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// Función del login
			login: async (email, password) => {
				try {
					let response = await fetch('https://bug-free-space-carnival-5g4gwpqx7prrfvrj6-3001.app.github.dev/api/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					})
					let data = await response.json()
					localStorage.setItem("token", data.access_token)
					setStore({auth: data.logged})
					// console.log(data);
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			// Función validar token
			getPrivate: async () => {
				let token = localStorage.getItem('token')
				try {
					let response = await fetch('https://bug-free-space-carnival-5g4gwpqx7prrfvrj6-3001.app.github.dev/api/profile', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
					})
					let data = await response.json()
					console.log(data);
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			// Función token
			validToken: async () => {
				let token = localStorage.getItem('token')
				try {
					let response = await fetch('https://bug-free-space-carnival-5g4gwpqx7prrfvrj6-3001.app.github.dev/api/valid-token', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
					})
					let data = await response.json()
					console.log(data);
					setStore({ auth: data.logged })
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},
			signOff: () => {
				console.log("ok")
				localStorage.removeItem("token");
				setStore({auth: false})
				return true
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		} 
	}
}; 

export default getState;
