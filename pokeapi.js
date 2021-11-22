const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= 150; i++) {
		await getPokemons(i);
	}
};

const getPokemons = async (id)=>{            
    const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await respuesta.json()
    createPokemonCard(pokemon)
}

createPokemonCard = (pokemon) =>{
    const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Tipo: <span>${type}</span></small>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons()

// const statAttack = data.stats[1].base_stat;
//     const statDefense = data.stats[2].base_stat;
//     const statSpeed = data.stats[5].base_stat;
  
//     // Set themeColor based on pokemon type
//     const themeColor = typeColor[data.types[0].type.name];
//     console.log(themeColor);
//     card.innerHTML = `
//           <p class="hp">
//             <span>HP</span>
//               ${hp}
//           </p>
//           <img src=${imgSrc} />
//           <h2 class="poke-name">${pokeName}</h2>
//           <div class="types">
           
//           </div>
//           <div class="stats">
//             <div>
//               <h3>${statAttack}</h3>
//               <p>Attack</p>
//             </div>
//             <div>
//               <h3>${statDefense}</h3>
//               <p>Defense</p>
//             </div>
//             <div>
//               <h3>${statSpeed}</h3>
//               <p>Speed</p>
//             </div>
//           </div>
//     `;
//     appendTypes(data.types);
//     styleCard(themeColor);
//   };
//   let appendTypes = (types) => {
//     types.forEach((item) => {
//       let span = document.createElement("SPAN");
//       span.textContent = item.type.name;
//       document.querySelector(".types").appendChild(span);
//     });
//   };
//   let styleCard = (color) => {
//     card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
//     card.querySelectorAll(".types span").forEach((typeColor) => {
//       typeColor.style.backgroundColor = color;
//     });
//   };