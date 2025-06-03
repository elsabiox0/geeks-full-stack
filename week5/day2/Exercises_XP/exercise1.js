const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const gifContainer = document.getElementById("gif-container");
    const gifs = data.data.slice(0, 12); 

    gifs.forEach(gif => {
      const card = document.createElement("div");
      card.className = "gif-card";

      const img = document.createElement("img");
      img.src = gif.images.fixed_height_small.url; 
      img.alt = gif.title;

      card.appendChild(img);
      gifContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
