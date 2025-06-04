const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteBtn = document.getElementById("delete-btn");

// Clé API de test gratuite de Giphy
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(
        searchTerm
      )}&limit=10`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Vérifie si on a des résultats
    if (result.data.length === 0) {
      alert("Aucun GIF trouvé !");
      return;
    }

    result.data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;
      gifContainer.appendChild(img);
    });

    input.value = "";
  } catch (error) {
    console.error("Erreur Fetch:", error);
    alert("Erreur lors du chargement des gifs. Réessaye !");
  }
});

deleteBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
