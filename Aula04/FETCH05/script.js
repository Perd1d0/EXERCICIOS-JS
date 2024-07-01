//Selecionando a div .container
const pokeContainer = document.getElementById('pokeContainer');
const pokemonCount = 100;

//Fução que percorre o objeto do FETCH
const fetchPokemon = async()=>{
    for(let i = 1; i <= pokemonCount; i ++){
        await getPokemons(i);
    }
}

//Buscando os pokemons pelo FETCH
const getPokemons = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.name);
//Chamar o CreatCard
    creatPokemonCard(data);
}

//Criando os Cards Dinamicamente
const creatPokemonCard = (poke) =>{
    const card = document.createElement('div');
    card.classList.add('pokemon');

//Inserindo os Elementos do Card
    const name = poke.name[0] + poke.name.slice(1);
    const id = poke.id.toString();
    const type = poke.types[0].type.name;

    //Criando o Card
    const pokemonInnerHtml = `<div class="imagemContainer">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Tipo: <span>${type}</span></small>
            </div>`
    card.innerHTML = pokemonInnerHtml;
    pokeContainer.appendChild(card);
}

fetchPokemon();