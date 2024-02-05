const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
let limit = 10;
let offset = 0;
const maxRecods = 151;

function loadMorePokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map((pokemon) => {
        return `
          <li class="pokemon">
              <div class="card ${pokemon.type}">
                  <span class="number">#${pokemon.number
                    .toString()
                    .padStart(3, "0")}</span>
                  <span class="name">${pokemon.name}</span>

                  <div class="detail">
                  <ul class="types">
                      ${pokemon.types
                        .map((type) => `<li class="type ${type}">${type}</li>`)
                        .join("")}
                  </ul>
                  <img src="${pokemon.photo}"
                      alt="${pokemon.name}" />
                  </div>

                  <div class="pokemon-ability-info">
                    <ul>
                          <li>
                            <span class="atribute-title">Height</span>
                            <span class="atribute-value">${
                              pokemon.height
                            }m</span>
                          </li>
                          <li>
                            <span class="atribute-title">Weight</span>
                            <span class="atribute-value">${
                              pokemon.weight
                            }Kg</span>
                          </li>
                          <li>
                            <span class="atribute-title">Ability</span>
                            <span class="atribute-value">${
                              pokemon.ability
                            }</span></span>
                          </li>
                    </ul>                    
                  </div>
              </div>
          </li>`;
      })
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

window.onload = () => {
  loadMorePokemonItens(offset, limit);
};

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  if (offset + limit >= maxRecods) {
    limit = maxRecods - offset;
    loadMoreButton.remove();
  }

  if (limit > 0) loadMorePokemonItens(offset, limit);
});
