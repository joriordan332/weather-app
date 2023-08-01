const weatherInput = document.querySelector('.weatherInput');
const search = document.querySelector('.search');

search.addEventListener('click', async () => {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
		const weatherData = await response.json();
		console.log(weatherData);
		/*img.src = weatherData.*****.*****.***;*/
		populateWeather(weatherData);

		} catch (error){
			console.log('Please enter a valid City');
		}

weatherInput.value = '';
});

weatherInput.addEventListener('keyup', async (e) => {
	if(e.key === 'Enter') {
		try {
			const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
			const weatherData = await response.json();
			console.log(weatherData);
			/*img.src = weatherData.*****.*****.***;*/
			populateWeather(weatherData);

			} catch (error){
				console.log('Please enter a valid City');
			}

weatherInput.value = '';
	}
});

window.onload = async () => {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='Acklam&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
		const weatherData = await response.json();
		console.log(weatherData);
		/*img.src = weatherData.*****.*****.***;*/
		populateWeather(weatherData);

		} catch (error){
			console.log('Please enter a valid City');
		}
};


function populateWeather(obj) {
	const currentWeather = {
	location: `${obj.location.name}, ${obj.location.country}`, 

	time: `${obj.location.localtime}`,
	temp_C: `${obj.current.temp_c}°C`, 
	temp_F: `${obj.current.temp_f}°F`,
	feels_like_C: `${obj.current.feelslike_c}°C`,
	feels_like_F: `${obj.current.feelslike_f}°F`,
	condition: `${obj.current.condition.text}`,
	condition_icon: `https:${obj.current.condition.icon}`,
	humidity: `${obj.current.humidity}`, 
	wind_MPH: `${obj.current.wind_mph}MPH`, 
	chance_of_rain: `${obj.forecast.forecastday[0].day.daily_chance_of_rain}%`
	}

	
	const temperature = document.querySelector('.temperature');
	temperature.textContent = currentWeather.temp_C;

	const temperatureDescription = document.querySelector('.temperatureDescription');
	temperatureDescription.textContent = currentWeather.condition;


	const location = document.querySelector('.location');
	location.textContent = currentWeather.location;


	const dateAndTime = document.querySelector('.dateAndTime');
	dateAndTime.textContent = currentWeather.time;

	const weatherIcon = document.querySelector('.weatherIcon');
	weatherIcon.src = currentWeather.condition_icon;

	const feelsLike = document.querySelector('.feelsLike');
	feelsLike.textContent = `Feels like ${currentWeather.feels_like_C}`;

	const humidity = document.querySelector('.humidity');
	humidity.textContent = currentWeather.humidity;

	const wind = document.querySelector('.wind');
	wind.textContent = currentWeather.wind_MPH;

	const chanceOfRain = document.querySelector('.chanceOfRain');
	chanceOfRain.textContent = currentWeather.chance_of_rain;



}

function appendWeatherData(){
	
}