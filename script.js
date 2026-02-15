const apiKey = "ApiKey";
const city = "Coimbra";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=it`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Controllo che non ci siano errori
    if (data.cod !== "200") {
      document.getElementById("cityName").innerText = "Errore";
      return;
    }

    // Meteo attuale
    const current = data.list[0];
    document.getElementById("cityName").innerText = data.city.name;
    document.getElementById("currentTemp").innerText = Math.round(
      current.main.temp,
    );
    document.getElementById("currentDesc").innerText =
      current.weather[0].description;
    document.getElementById("currentIcon").src =
      `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;

    // Meteo "orario"
    const hourlyContainer = document.getElementById("hourlyList");
    hourlyContainer.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      let item = data.list[i];
      let hour = new Date(item.dt * 1000).getHours();

      hourlyContainer.innerHTML += `
                <div class="item">
                    <span>${hour}:00</span>
                    <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">
                    <span>${Math.round(item.main.temp)}°</span>
                </div>`;
    }

    // Meteo Giornaliero
    const dailyContainer = document.getElementById("dailyList");
    dailyContainer.innerHTML = "";

    for (let i = 0; i < data.list.length; i++) {
      let item = data.list[i];

      if (item.dt_txt.includes("12:00:00")) {
        let date = new Date(item.dt * 1000);
        let dayName = date.toLocaleDateString("it-IT", { weekday: "short" });

        dailyContainer.innerHTML += `
                    <div class="item">
                        <span style="text-transform: capitalize;">${dayName}</span>
                        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">
                        <span>${Math.round(item.main.temp)}°</span>
                    </div>`;
      }
    }
  } catch (err) {
    console.log("Fetch error:", err);
    document.getElementById("cityName").innerText = "Connection error";
  }
}

// Scorrimento dei dots
const scrollWrapper = document.getElementById("swipeWrapper");
const allDots = document.querySelectorAll(".dot");

scrollWrapper.addEventListener("scroll", () => {
  let index = Math.round(scrollWrapper.scrollLeft / scrollWrapper.offsetWidth);

  for (let i = 0; i < allDots.length; i++) {
    if (i === index) {
      allDots[i].classList.add("active");
    } else {
      allDots[i].classList.remove("active");
    }
  }
});

// Avvio la funzione
getWeather();

