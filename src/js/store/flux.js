const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "Primero",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            planets: [],
			people: [],
			planetaActual: {},
			pjActual: {},
            favoritos: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
              //      fetch("https://www.swapi.tech/api/planets/").then(res => res.json() ).then(data => setStore({ "planets": data.results }))
            },
            cargarConParams: (id) =>{
                console.log('cargarConParams')
                console.log("https://www.swapi.tech/api/planets/" + id )
            },
			loadCharaData: () => {
				fetch("https://www.swapi.tech/api/people/").then(res => res.json() ).then(data => setStore({ "people": data.results }))
			},
			charaInfo: (uid) => {
				fetch("https://www.swapi.tech/api/people/" + uid).then(res => res.json() ).then(data => setStore({ "pjActual": data.result.properties }))
			},
			loadPlanetData: () =>{
				fetch("https://www.swapi.tech/api/planets/").then(res => res.json() ).then(data => setStore({ "planets": data.results }))
			},
			planetInfo:(uid) =>{
				fetch("https://www.swapi.tech/api/planets/" + uid).then(res => res.json() ).then(data => setStore({ "planetaActual": data.result.properties }))
				
			},
            addFav: (item) => { 
                /**let favoritos = store.favoritos;**/
                //favoritos.push(item)
                console.log(getStore())
                setStore({"favoritos": favoritos})
               
            },
            deleteFav: (uid)=>{
             let newFav = store.favorito.filter((item) => item.uid !== uid)
             setStore({"favorito":newFav})
            },
            getMorePtInfo: (url, indice) => {
                const store = getStore();
               fetch(url).then( resp => resp.json()).then(data => {
                 let newPlanets = store.planets;
                 newPlanets[indice].properties = data.result.properties;  
                setStore ({"planets": newPlanets})
            }).catch((error)=> console.log(error))
            },
            getMorePplInfo: (url, indice) => {
                const store = getStore();
                fetch(url).then( resp => resp.json()).then(data => {
                  let newChara = store.people;
                  newChara[indice].properties = data.result.properties;  
                 setStore ({"people": newChara})
             }).catch((error)=> console.log(error))
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
    };
};
export default getState;