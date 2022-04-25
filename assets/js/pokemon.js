/* types in spanish */
types_es = {
    'bug': 'bicho',
    'dark': 'oscuro',
    'dragon': 'dragón',
    'electric': 'eléctrico',
    'fairy': 'hada',
    'fighting': 'pelea',
    'fire': 'fuego',
    'flying': 'volador',
    'ghost': 'fantasma',
    'grass': 'planta',
    'ground': 'tierra',
    'ice': 'hielo',
    'normal': 'normal',
    'poison': 'veneno',
    'psychic': 'psíquico',
    'rock': 'roca',
    'steel': 'acero',
    'water': 'agua'
}


/* get the info for the page */
function getPageInfo() {
    pokemonSearch = loadPokemonName();
    updateSearchbar(pokemonSearch);

    if (pokemonSearch) {
        noPokemonFound();
        /* fetch chosen pokémon */
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
            .then(response => response.json())
            .then(data =>{
                console.log(data.sprites.front_default)
                titlePokemon(data);
                putImg(data);
                pokemonInfo(data);
                pokemonType(data);
            });
    }
}

/* get the name of the pokémon in case the user has made a research */
function loadPokemonName() {
    if (myLocalStorage.getItem('pokemon_name') !== null) {
        return myLocalStorage.getItem('pokemon_name');
    }
}

/* put the input of the user on the searchbar */
function updateSearchbar(pokemonSearch) {
    if (pokemonSearch){
        $inputField.setAttribute('value', pokemonSearch);
    }
}

/* put name and number of pokémon */
function titlePokemon(data) {
    $pokemonName = document.querySelector('#pokemon-name');
    $pokemonName.innerText = data.name;
    $pokemonNumber = document.querySelector('#pokemon-number');
    number = data.id >= 100 ? '#' : '#0';
    number += (data.id >= 10 ? '' : '0') + String(data.id);
    $pokemonNumber.innerText = number;
}

/* put image */
function putImg(data) {
    $asset = document.querySelector("#asset");
    $asset.style.backgroundColor = 'white';
    $pokemonInfo = document.querySelector('#pokemon-info');
    $pokemonInfo.style.backgroundColor = 'cornflowerblue';
    pokemonImg = document.createElement('img');
    pokemonImg.src = data.sprites.front_default;
    $asset.appendChild(pokemonImg);
}

/* put pokémon info */
function pokemonInfo(data) {
    height = "Altura: " + (data.height/10) + "m";
    weight = "Peso: " + (data.weight/10) + "kg";
    $pokemonInfo = document.querySelector("#pokemon-info");
    pokemonHeight = document.createElement('p');
    pokemonWeight = document.createElement('p');
    pokemonHeight.innerText = height;
    pokemonWeight.innerText = weight;
    $pokemonInfo.appendChild(pokemonHeight);
    $pokemonInfo.appendChild(pokemonWeight);
}

/* put pokémon types */
function pokemonType(data) {
    types = data.types;
    $pokedexDiv = document.querySelector(".pokedex-div");

    /* loop for each type */
    for (i=0; i<types.length; i++) {
        type = data.types[i].type.name; // get 1st or 2nd type
        typeDiv = document.createElement('div');
        typeDiv.classList.add('type-div', 'pokedex-blocks', type);
        typeDiv.id = `type-${i+1}`;
        typeText = document.createElement('p');
        typeText.classList.add('type-text');
        typeText.innerText = types_es[type]; // write the type in Spanish
        typeDiv.appendChild(typeText);
        $pokedexDiv.appendChild(typeDiv);
    }

}

/* if no pokémon found, just show a text */
function noPokemonFound() {
    $pokemonName = document.querySelector('#pokemon-name');
    $pokemonName.innerText = 'Pokémon not found :(';
    $asset = document.querySelector("#asset");
    $asset.style.backgroundColor = 'black';
    $pokemonInfo = document.querySelector('#pokemon-info');
    $pokemonInfo.style.backgroundColor = 'black';
}

getPageInfo();