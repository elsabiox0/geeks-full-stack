document.getElementById('sunriseForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const lat1 = document.getElementById('lat1').value;
  const lng1 = document.getElementById('lng1').value;
  const lat2 = document.getElementById('lat2').value;
  const lng2 = document.getElementById('lng2').value;

  const apiURL = (lat, lng) => `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<p>⏳ Fetching data from the Matrix...</p>`;

  try {
    const [res1, res2] = await Promise.all([
      fetch(apiURL(lat1, lng1)),
      fetch(apiURL(lat2, lng2))
    ]);

    const [data1, data2] = await Promise.all([
      res1.json(),
      res2.json()
    ]);

    const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString();
    const sunset1 = new Date(data1.results.sunset).toLocaleTimeString();
    const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString();
    const sunset2 = new Date(data2.results.sunset).toLocaleTimeString();

    resultsDiv.innerHTML = `
      <div class="city-box">
        <h3>🌆 City 1</h3>
        <p>Sunrise: ${sunrise1}</p>
        <p>Sunset: ${sunset1}</p>
      </div>
      <div class="city-box">
        <h3>🌇 City 2</h3>
        <p>Sunrise: ${sunrise2}</p>
        <p>Sunset: ${sunset2}</p>
      </div>
    `;
  } catch (error) {
    console.error('Matrix error:', error);
    resultsDiv.innerHTML = `<p class="error">💥 Error fetching data. The Matrix is broken.</p>`;
  }
});

