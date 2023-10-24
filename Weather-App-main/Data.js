async function fetchData() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall,windspeed_120m,winddirection_80m,temperature_80m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin');
        const data = await response.json(); // lub response.text() lub response.blob() w zależności od rodzaju danych
        console.log(data);
        const time = data.current_weather.time;
        const ActualDate = new Date(time);
         year = ActualDate.getFullYear();
         day = ActualDate.getDate();
         month = ActualDate.getMonth()+1;
        SetDate()
        try{
            WeatherCode = data.current_weather.weathercode
            setWeather()
        }
        catch(error){
            console.error("Nie można pobrać informacji o pogodzie")
        }
        try{ //pobieranie danych o godzinie aktualizacji
            
             hour = ActualDate.getHours();
             minute = ActualDate.getMinutes();
              setTime();
           }
           catch(error){
            console.error("Nie można pobrać informacji o ostatniej aktualizacji danych")
           }
        try{ //pobieranie danych o temperaturze i jednostce
            temperature = data.current_weather.temperature
            tempUnit = data.current_weather_units.temperature
            setTemp()
        }
        catch(error){
            console.error("Nie można pobrać temperatury")
        }
        try{ //dane o wietrze
            windSpeed = data.current_weather.windspeed
            windUnit = data.current_weather_units.windspeed
            
            setWind()
        }
            catch(error){
                console.error("Nie można pobrać informacji na temat wiatru")
        }
        try{
            rainfalls = data.daily.rain_sum[0]
            setRainFalls()
        }
        catch(error){
            console.error("Nie można pobrać informacji o ilości deszczu")
        }
        try{
            sunrise = data.daily.sunrise[0]
            const [useless, godzinaPart] = sunrise.split('T');
            const [godzina, minuta] = godzinaPart.split(':');
             wschod = `${godzina}:${minuta}`;
            setSunRise()
        }
        catch(error){
            console.error("Nie można pobrać informacji o wschodzie słońca")
        }
        try{
            sunset = data.daily.sunset[0]
            const [useless, godzinaPart] = sunset.split('T');
            const [godzina, minuta] = godzinaPart.split(':');
             zachod = `${godzina}:${minuta}`;
            setSunSet()
        }
        catch(error){
            console.error("Nie można pobrać informacji o zachodzie słońca")
        }
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
    }
}


fetchData();

