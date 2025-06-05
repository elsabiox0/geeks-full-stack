document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const pokemonImageElement = document.getElementById('pokemon-image');
    const pokemonNameElement = document.getElementById('pokemon-name');
    const pokemonIdElement = document.getElementById('pokemon-id');
    const pokemonHeightElement = document.getElementById('pokemon-height');
    const pokemonWeightElement = document.getElementById('pokemon-weight');
    const pokemonTypesElement = document.getElementById('pokemon-types');

    const randomButton = document.getElementById('random-pokemon');
    const prevButton = document.getElementById('prev-pokemon');
    const nextButton = document.getElementById('next-pokemon');

    const loadingMessageElement = document.getElementById('loading-message');
    const errorMessageElement = document.getElementById('error-message');
    const pokemonDataDisplayElement = document.getElementById('pokemon-data-display');

    // --- Global State ---
    let currentPokemonId = null;
    const MAX_POKEMON_ID = 1025; // Max ID for Pokémon with generally available sprites (Gen 1-9)

    // --- API Base URL ---
    const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

    // --- Helper Functions ---
    function displayLoading(isLoading) {
        if (isLoading) {
            loadingMessageElement.style.display = 'flex'; // It's a flex container for centering content
            pokemonImageElement.style.display = 'none';
            errorMessageElement.style.display = 'none';
            pokemonDataDisplayElement.style.opacity = 0.6;
        } else {
            loadingMessageElement.style.display = 'none';
            pokemonDataDisplayElement.style.opacity = 1;
        }
    }

    function displayError(message) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.display = 'block';
        pokemonImageElement.style.display = 'none';
        loadingMessageElement.style.display = 'none';

        // Clear previous Pokémon data from text fields on error display
        pokemonNameElement.textContent = 'Error';
        pokemonIdElement.textContent = '---';
        pokemonHeightElement.textContent = 'Height: ---';
        pokemonWeightElement.textContent = 'Weight: ---';
        pokemonTypesElement.innerHTML = '<strong>Type(s):</strong> ---';
        
        updateNavButtonStates(); // Update nav based on the (potentially still valid) currentPokemonId
    }

    function clearError() {
        errorMessageElement.style.display = 'none';
        errorMessageElement.textContent = '';
    }
    
    function updatePokemonDisplay(pokemonData) {
        clearError(); // Clear any previous error messages

        const spriteUrl = pokemonData.sprites?.other?.['official-artwork']?.front_default || 
                          pokemonData.sprites?.front_default;

        if (spriteUrl) {
            pokemonImageElement.src = spriteUrl;
            pokemonImageElement.alt = pokemonData.name;
            pokemonImageElement.style.display = 'block';
        } else {
            pokemonImageElement.src = ''; 
            pokemonImageElement.alt = `Image not available for ${pokemonData.name}`;
            pokemonImageElement.style.display = 'none'; 
        }

        pokemonNameElement.textContent = pokemonData.name; // CSS will capitalize
        pokemonIdElement.textContent = `ID: #${pokemonData.id}`;
        pokemonHeightElement.textContent = `Height: ${pokemonData.height / 10} m`; // Decimetres to meters
        pokemonWeightElement.textContent = `Weight: ${pokemonData.weight / 10} kg`; // Hectograms to kilograms

        pokemonTypesElement.innerHTML = '<strong>Type(s):</strong> ';
        if (pokemonData.types && pokemonData.types.length > 0) {
            pokemonData.types.forEach(typeInfo => {
                const typeSpan = document.createElement('span');
                typeSpan.textContent = typeInfo.type.name;
                typeSpan.className = `type-${typeInfo.type.name}`; // For styling
                pokemonTypesElement.appendChild(typeSpan);
            });
        } else {
            pokemonTypesElement.innerHTML += '<span>Unknown</span>';
        }
        
        currentPokemonId = pokemonData.id; // Set the current ID to the successfully fetched Pokémon
        updateNavButtonStates();
    }

    function updateNavButtonStates() {
        prevButton.disabled = currentPokemonId === null || currentPokemonId <= 1;
        nextButton.disabled = currentPokemonId === null || currentPokemonId >= MAX_POKEMON_ID;
    }

    // --- API Fetch Function ---
    async function fetchPokemonById(id) {
        // Basic validation for ID range before fetching
        if (typeof id !== 'number' || id <= 0) {
            displayError("Invalid Pokémon ID requested.");
            // Do not change currentPokemonId here
            updateNavButtonStates();
            return null;
        }
        
        console.log(`Fetching Pokémon with ID: ${id}. Current global ID: ${currentPokemonId}`);
        displayLoading(true);
        clearError();

        try {
            const response = await fetch(`${API_BASE_URL}${id}`);
            if (!response.ok) {
                if (response.status === 404) {
                    // Use the specific error message format
                    throw new Error(`Oh no! That Pokémon (ID: ${id}) isn’t available…`);
                }
                throw new Error(`HTTP error! Status: ${response.status} for ID ${id}`);
            }
            const data = await response.json();
            updatePokemonDisplay(data);
            return data; // Success
        } catch (error) {
            console.error("Fetch error:", error.message);
            // Display the error message from the error object if it's our custom one, or the generic one
            displayError(error.message); 
            // currentPokemonId remains the ID of the last successfully fetched Pokémon
            return null; // Failure
        } finally {
            displayLoading(false);
            // Update nav buttons based on currentPokemonId, which reflects the last successful fetch
            updateNavButtonStates(); 
        }
    }

    // --- Event Handler Functions ---
    async function handleRandomPokemon() {
        console.log("Random button clicked. Fetching random Pokémon...");
        const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        await fetchPokemonById(randomId);
    }

    async function handlePreviousPokemon() {
        if (currentPokemonId && currentPokemonId > 1) {
            console.log(`Previous button clicked. Current ID: ${currentPokemonId}. Fetching ID: ${currentPokemonId - 1}`);
            await fetchPokemonById(currentPokemonId - 1);
        } else {
            console.log("Cannot fetch previous: at the beginning or no Pokémon loaded.");
            updateNavButtonStates(); // Ensure buttons reflect current state
        }
    }

    async function handleNextPokemon() {
        if (currentPokemonId && currentPokemonId < MAX_POKEMON_ID) {
            console.log(`Next button clicked. Current ID: ${currentPokemonId}. Fetching ID: ${currentPokemonId + 1}`);
            await fetchPokemonById(currentPokemonId + 1);
        } else if (currentPokemonId === MAX_POKEMON_ID) {
            console.log("Cannot fetch next: at the end of the known list.");
            displayError("You've reached the end of this Pokédex version!");
            setTimeout(clearError, 3000); // Clear message after a few seconds
            updateNavButtonStates();
        } else if (!currentPokemonId) {
             console.log("Cannot fetch next: no Pokémon loaded initially.");
             updateNavButtonStates();
        }
    }
    


    // --- Event Listeners ---
    randomButton.addEventListener('click', handleRandomPokemon);
    prevButton.addEventListener('click', handlePreviousPokemon);
    nextButton.addEventListener('click', handleNextPokemon);

    // --- Initial Setup ---
    function initializePokedex() {
        pokemonNameElement.textContent = "Pokédex Ready!";
        pokemonIdElement.textContent = "Click ✨ to start";
        pokemonHeightElement.textContent = "Height: ---";
        pokemonWeightElement.textContent = "Weight: ---";
        pokemonTypesElement.innerHTML = "<strong>Type(s):</strong> ---";
        displayLoading(false);
        clearError();
        updateNavButtonStates(); // Initialize button states (prev/next should be disabled)
    }

    initializePokedex(); // Set initial state when the page loads
});