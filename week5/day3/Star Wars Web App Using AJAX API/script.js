const button = document.getElementById('button');
const nameDiv = document.getElementById('name');
const heightDiv = document.getElementById('height');
const genderDiv = document.getElementById('gender');
const birthYearDiv = document.getElementById('birth-year');
const homeWorldDiv = document.getElementById('home-world');

const loadingMsg = document.getElementById('loading');
const errorMsg = document.getElementById('error');

button.addEventListener('click', () => {
  const randomId = Math.floor(Math.random() * 83) + 1;

  showLoading();
  hideError();

  fetch(`https://www.swapi.tech/api/people/${randomId}`)
    .then(response => {
      if (!response.ok) throw new Error("API error");
      return response.json();
    })
    .then(async data => {
      const character = data.result.properties;
      const homeworldUrl = character.homeworld;

      const homeworldName = await fetch(homeworldUrl)
        .then(res => res.json())
        .then(homeData => homeData.result.properties.name)
        .catch(() => "Unknown");

      displayCharacter(character, homeworldName);
    })
    .catch(() => {
      showError();
    })
    .finally(() => {
      hideLoading();
    });
});

function displayCharacter(character, homeworld) {
  nameDiv.textContent = `Name: ${character.name}`;
  heightDiv.textContent = `Height: ${character.height} cm`;
  genderDiv.textContent = `Gender: ${character.gender}`;
  birthYearDiv.textContent = `Birth Year: ${character.birth_year}`;
  homeWorldDiv.textContent = `Home World: ${homeworld}`;
}

function showLoading() {
  loadingMsg.style.display = 'block';
}

function hideLoading() {
  loadingMsg.style.display = 'none';
}

function showError() {
  errorMsg.style.display = 'block';
}

function hideError() {
  errorMsg.style.display = 'none';
}
