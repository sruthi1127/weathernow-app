
const input = document.getElementById("city-input");
const button = document.querySelector(".search-bar button");
const errorMsg = document.querySelector(".error-msg");


const API_KEY = "0e8ac732710ea150490e666a56c90ba9";


button.addEventListener("click", () => {
    const city = input.value.trim();

    if (city === "") {
        errorMsg.textContent = "Please enter a city name";
    document.querySelector(".temp").textContent = "";
    document.querySelector(".desc").textContent = "";
    document.querySelector(".extra").textContent = "";

        return;
    }

    errorMsg.textContent = "";
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

       
    fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
          

            document.querySelector(".temp").textContent =
                `🌡 Temperature: ${temperature}°C`;

            document.querySelector(".desc").textContent =
                `☁ Condition: ${description}`;

            document.querySelector(".extra").textContent =
                `💧 Humidity: ${humidity}% | 🌬 Wind: ${wind} m/s`;
        })
        .catch(() => {
            errorMsg.textContent = "City not found";
        });
}





const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
