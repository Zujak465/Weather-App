async function fetchData() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall,windspeed_120m,winddirection_80m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin');
        const data = await response.json(); // lub response.text() lub response.blob() w zależności od rodzaju danych
        console.log(data);
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
    }
}

fetchData();
