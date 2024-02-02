const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonListToLi).join("");
  setPokemonBackgroundColor();
});

function convertPokemonTypesToLi(pokemonTypes = []) {
  return pokemonTypes.map(
    (slotType) => `<li class="type">${slotType.type.name}</li>`
  );
}

function convertPokemonListToLi(pokemon) {
  return `
        <li class="pokemon ">
            <span class="number">#${pokemon.order
              .toString()
              .padStart(3, "0")}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}" />
            </div>
        </li>
    `;
}

function setPokemonBackgroundColor() {
  const pokemonCards = document.querySelectorAll(".pokemon");
  pokemonCards.forEach((pokemonCard) => {
    const pokemonType = pokemonCard.querySelector(".type").textContent.trim();
    const backgroundColor = getComputedStyle(pokemonCard).getPropertyValue(
      `--color-${pokemonType}`
    );
    pokemonCard.style.backgroundColor = backgroundColor;
  });
}
