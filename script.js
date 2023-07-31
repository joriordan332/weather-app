const weatherInput = document.querySelector('.weatherInput');
const search = document.querySelector('.search');

search.addEventListener('click', async () => {
	try {
const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
const weatherData = await response.json();
console.log(weatherData);
/*img.src = weatherData.*****.*****.***;*/
populateWeather(weatherData)
} catch (error){
	console.log('Please enter a valid City');
}

weatherInput.value = '';
});



function populateWeather(obj) {
	const currentWeather = 
	`Location: ${obj.location.name} 
	Country: ${obj.location.country}
	Time: ${obj.location.localtime}
	Temp C: ${obj.current.temp_c} 
	Temp F: ${obj.current.temp_f} 
	Feels like C: ${obj.current.feelslike_c}
	Feels like F: ${obj.current.feelslike_f}
	Condition: ${obj.current.condition.text} ${obj.current.condition.icon}
	Humidity: ${obj.current.humidity} 
	Wind MPH: ${obj.current.wind_mph} 
	Chance of rain: ${obj.forecast.forecastday[0].day.daily_chance_of_rain}%`;
	console.log(currentWeather)
}