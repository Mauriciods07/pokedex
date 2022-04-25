const myLocalStorage = window.localStorage;// verificar en qué página se encuentra el usuario

/* save the name of the pokémon that the user searches */
function savePokemonName(pokemonName) {
    myLocalStorage.setItem('pokemon_name', pokemonName);
}

$inputField = document.querySelector('.searcher');
$inputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.btn-search').click();
    }
});

$button = document.querySelector('.btn-search');
$button.addEventListener('click', function() {
    savePokemonName($inputField.value);
})