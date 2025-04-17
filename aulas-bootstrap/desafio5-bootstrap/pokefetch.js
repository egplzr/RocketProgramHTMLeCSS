document.addEventListener('DOMContentLoaded', function () {
    async function fetchPokemon(id) {
        try {
            const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return (await response).json();
        } catch (error) {
            console.error(`Erro ao buscar o Pokemon de id ${id}`, error);
            return null;
        }
    }

    function preencherCard(card, pokemon) {
        if (!pokemon) return;

        const img = card.querySelector('.card-img-top');
        const title = card.querySelector('h6');
        const description = card.querySelector('.card-text');

        img.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
        img.alt = pokemon.name;
        title.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        const types = pokemon.types.map(type => type.type.name).join(', ');
        description.textContent = `Tipo: ${types} | Altura: ${pokemon.height/10}m | Peso: ${pokemon.weight/10}kg`;

        card.classList.add('loaded');
        card.classList.add('bg-light');
    }

    const cards = document.querySelectorAll('.card');
    const pokeIds = [7, 8, 9];

    Promise.all(pokeIds.map(id => fetchPokemon(id)))
    .then(pokemons => {
        cards.forEach((card, index) => {
            if (index < pokemons.length) {
                preencherCard(card, pokemons[index]);
            }
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os Pokemon:', error);
    });
});