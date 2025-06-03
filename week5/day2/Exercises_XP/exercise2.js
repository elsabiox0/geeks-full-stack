// Giphy API URL with parameters:
// - q: search term "sun"
// - limit: 10 results
// - offset: 2 (starts from the 3rd result)
// - rating: G (general)
// - api_key: your Giphy API key
const apiUrl = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Use Fetch API to get the data from Giphy
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Log the raw response object to the console
    console.log("✅ Giphy Response Object:", data);

    // Get the container to insert gifs
    const container = document.getElementById("gif-container");

    // Loop through each gif and add it to the page
    data.data.forEach(gif => {
      const card = document.createElement("div");
      card.className = "gif-card";

      const img = document.createElement("img");
      img.src = gif.images.fixed_height_small.url;
      img.alt = gif.title;

      card.appendChild(img);
      container.appendChild(card);
    });
  })
  .catch(error => {
    // Log any error that occurs
    console.error("❌ Fetch Error:", error);
  });
