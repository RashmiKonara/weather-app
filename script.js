window.onload = function () {
    const citySelect = document.getElementById("city");
    const currentWeather = document.getElementById("current-weather");
    const tomorrowWeather = document.getElementById("tomorrow-weather");
    const yesterdayWeather = document.getElementById("yesterday-weather");
    const currentTime = document.getElementById("current-time");
    const currentDate = document.getElementById("current-date");

    citySelect.addEventListener("change", function () {
        const city = citySelect.value;
        // Fetch weather data using city
        // Replace the following with your API call to get weather data
        // Example:
        // fetch(`https://api.example.com/weather?city=${city}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Update UI with weather data
        //     })
        //     .catch(error => console.error('Error fetching weather data:', error));
        
        // Example data
        const weatherData = {
            current: "Sunny",
            tomorrow: "Partly Cloudy",
            yesterday: "Rainy",
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString()
        };

        // Update UI with weather data
        currentWeather.textContent = "Current Weather: " + weatherData.current;
        tomorrowWeather.textContent = "Tomorrow's Weather: " + weatherData.tomorrow;
        yesterdayWeather.textContent = "Yesterday's Weather: " + weatherData.yesterday;
        currentTime.textContent = "Current Time: " + weatherData.time;
        currentDate.textContent = "Current Date: " + weatherData.date;
    });
};
