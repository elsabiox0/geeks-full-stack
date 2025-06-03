const button = document.getElementById("fetch-btn");
const output = document.getElementById("output");

button.addEventListener("click", fetchStarship);

async function fetchStarship() {
  output.textContent = "Loading...";

  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    output.textContent = JSON.stringify(data.result, null, 2);
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }
}
