window.onload =  () => {
    const cards = document.querySelectorAll(".pokemon");

    cards.forEach(card => {
        const pokemonType = card.querySelector(".type").textContent.trim();

        const color = getComputedStyle(card).getPropertyValue(`--color-${pokemonType}`);
        
        card.style.backgroundColor = color;
    });

};
