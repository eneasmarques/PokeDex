const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonListToLi).join("");
  setPokemonBackgroundColor();
});

function convertPokemonListToLi(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#${pokemon.number
              .toString()
              .padStart(3, "0")}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type">${type}</li>`)
                  .join("")}
            </ol>
            <img src="${pokemon.photo}"
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
