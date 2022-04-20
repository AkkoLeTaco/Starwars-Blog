const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			res: [],
			img: "https://starwars-visualguide.com/assets/img/characters/",
			des: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people", {
					method: "GET",
					redirect: "follow",
				})
					.then(response => response.json())
					.then((result) => setStore({res : result}))
					.catch(error => console.log('error', error));
			},
			loadDetails: (num) => {


				fetch(`https://www.swapi.tech/api/people/${num}`, {
					method: "GET",
					redirect: "follow",
				})
					.then(response => response.json())
					.then((result) => setStore({des : result}))
					.catch(error => console.log('error', error));

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire details array to look for the respective index
				//and change its color
				const details = store.details.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ details: details });
			}
		}
	};
};

export default getState;
