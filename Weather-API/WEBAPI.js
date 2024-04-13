async function getWeather() {
  const loc = document.getElementById('district').value;
  //const loc='erode';
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${loc}&aqi=no`);
    const data = await response.json();
    const place = data.location.name    ;
    const we = data.current.condition.text;
    const imageLink = data.current.condition.icon;
    const temp=data.current.temp_c;
    const region=data.location.region;
    const country=data.location.country;
    const wind_kph=data.current.wind_kph;
    const humidity=data.current.humidity;
    document.getElementById("api").textContent = `${place}-Weather Condition: ${we}`;
    document.getElementById("image").src = `https:${imageLink}`;
    document.getElementById("temp").innerHTML=`Temperature: ${temp}`;
    document.getElementById("country").innerHTML=`Country: ${country}`;
    document.getElementById("region").innerHTML=`Region: ${region}`;
    document.getElementById("wind_kph").innerHTML=`Wind_kph: ${wind_kph}`;
    document.getElementById("humidity").innerHtml="Humidity: "+humidity;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById("api").textContent = "Error fetching weather data";
  }
}