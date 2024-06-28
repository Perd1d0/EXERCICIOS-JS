//Função FETCH do botão pesquisar
async function fetchPokemon(){
    try {
        const pokemonID = document.getElementById('pokemonID').value;

        if(pokemonID == ''){
            alert('Digite um ID válido');
            throw new Error('ID inválido');
        }

        const pokemonName = document.getElementById('pokemonName');
        const pokemonType = document.getElementById('pokemonType');

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
            if(!resp.ok){
                throw new Error('Pokemon não encontrado');
            } else {
                const data = await resp.json();
                console.log(data);
                //Imagem
                const pokemonSprite = data.sprites.front_default;
                const imgElemento = document.getElementById('pokemonSprite');
                //Nome
                const pokemonNameData = data.name.toUpperCase();
                //Tipo
                const pokemonTypeData = data.types[0].type.name;
                //Inserindo os elementos do data no html

                imgElemento.src = pokemonSprite;
                imgElemento.style.display = 'block';
                pokemonName.innerHTML = pokemonNameData;
                pokemonType.innerHTML = pokemonTypeData;
            }

    } catch (error) {
        console.log(error);
    }
}

fetchPokemon();