const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			CharacterCards: {},
			img: "https://starwars-visualguide.com/assets/img/characters/",
			CharacterDescription: {},
			CharacterFavorite: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people", {
					method: "GET",
					redirect: "follow",
				})
					.then(response => response.json())
					.then((result) => setStore({CharacterCards : result}))
					.catch(error => console.log('error', error));
			},
			loadDetails: (num) => {
				fetch(`https://www.swapi.tech/api/people/${num}`, {
					method: "GET",
					redirect: "follow",
				})
					.then(response => response.json())
					.then((result) => setStore({CharacterDescription : result}))
					.catch(error => console.log('error', error));

			},
			loadFavorites: (name) => {
				const store = getStore()
				console.log(store.CharacterFavorite)
				if (store.CharacterFavorite.find(fav => fav.uid != name.uid)){
					setStore({CharacterFavorite : [...store.CharacterFavorite, name]})
				}
			}
		}
	};
};

export default getState;
