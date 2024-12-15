const apiKey = "bf2b8590be462e6c9f83c8e1ee8419c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Veuillez entrer une ville !");
    return;
  }
  fetchWeather(city);
});

function fetchWeather(city) {
  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
    .then((response) => {
      if (!response.ok) throw new Error("Ville introuvable !");
      return response.json();
    })
    .then((data) => displayWeather(data))
    .catch((error) => alert(error.message));
}

function displayWeather(data) {
  const weatherResult = document.getElementById("weather-result");
  weatherResult.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Température : ${data.main.temp}°C</p>
    <p>Météo : ${data.weather[0].description}</p>
    <p>Humidité : ${data.main.humidity}%</p>
    <p>Vent : ${data.wind.speed} m/s</p>
  `;
}
