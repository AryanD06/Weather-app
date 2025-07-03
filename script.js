async function getWeather() {
    const city=document.getElementById("cityInput").value;
    const apiKey=`b0b8c4c29ecbff6dc22f7004f077f331`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherResult=document.getElementById("weatherResult");

    if (!city){
        weatherResult.innerHTML="Please enter a city name";
        return;
    }
    try{
        const response=await fetch(url);
        const data=await response.json();

        if (data.cod==200){
            weatherResult.innerHTML=`
            <h2>${data.name},${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}  °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;}
        else{
            weatherResult.innerHTML="City not found";
        }
    }
    catch(error){
        weatherResult.innerHTML="error fetching data.";
        console.error(error);
    }
    
}

