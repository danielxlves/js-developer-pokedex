const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


function convertEffects(pokeDetail) {
    const pokeEffect = new Effects()
    
    return effects
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getEffects =  async (id) => {
    const url = `https://pokeapi.co/api/v2/ability/${id}/`

    return fetch(url)
    .then((response) => response.json())
    .then((response) => response.effect_entries)
    .then((effects)  => {

        class Effects {
            effect;
            shortEffect;
        }

        const pokemonEffects = new Effects()
        pokemonEffects.effect = effects[0].effect
        pokemonEffects.shortEffect = effects[1].effect
        return pokemonEffects
    })

}