const weatherInput = document.querySelector('.weatherInput');
const search = document.querySelector('.search');
const errorMessage = document.querySelector('.error');

search.addEventListener('click', async () => {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
		const weatherData = await response.json();
		errorMessage.textContent = '';
		populateWeather(weatherData);
		} catch (error){
			errorMessage.textContent = 'Location not found. Please enter a valid city'
		}

weatherInput.value = '';
});

weatherInput.addEventListener('keyup', async (e) => {
	if(e.key === 'Enter') {
		try {
			const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
			const weatherData = await response.json();
			errorMessage.textContent = '';
			populateWeather(weatherData);
			} catch (error){
				errorMessage.textContent = 'Location not found. Please enter a valid city'
			}

weatherInput.value = '';
	}
});

window.onload = async () => {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='Acklam&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
		const weatherData = await response.json();
		populateWeather(weatherData);

		} catch (error){
			errorMessage.textContent = 'Location not found. Please enter a valid city'
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
	humidity: `${obj.current.humidity}%`, 
	wind_MPH: `${obj.current.wind_mph} MPH`, 
	chance_of_rain: `${obj.forecast.forecastday[0].day.daily_chance_of_rain}%`,
	sunrise: `${obj.forecast.forecastday[0].astro.sunrise}`,
	sunset: `${obj.forecast.forecastday[0].astro.sunset}`,
	cloudiness: `${obj.current.cloud}%`,
	max_c: `${obj.forecast.forecastday[0].day.maxtemp_c}`,
	max_f: `${obj.forecast.forecastday[0].day.maxtemp_f}`,
	min_c: `${obj.forecast.forecastday[0].day.mintemp_c}`,
	min_f: `${obj.forecast.forecastday[0].day.mintemp_f}`,
	}
	
	
	const temperature = document.querySelector('.temperature');
	let getCelcius = parseInt(currentWeather.temp_C);
	temperature.textContent = `${getCelcius}°C`;

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

	const sunrise = document.querySelector('.sunrise');
	sunrise.textContent = currentWeather.sunrise;

	const sunset = document.querySelector('.sunset');
	sunset.textContent = currentWeather.sunset;

	const cloudiness = document.querySelector('.cloudiness');
	cloudiness.textContent = currentWeather.cloudiness;

	const minTemp = document.querySelector('.minTemp');
	minTemp.textContent = `L: ${currentWeather.min_c}`;

	const maxTemp = document.querySelector('.maxTemp');
	maxTemp.textContent = `H: ${currentWeather.max_c}`;

	const celcius = document.querySelector('.celcius');
	const fahrenheit = document.querySelector('.fahrenheit');

	fahrenheit.addEventListener('click', () => {
		fahrenheit.className = 'fahrenheit active';
		celcius.className = 'celcius';
		let getFahrenheit = parseInt(currentWeather.temp_F);
		temperature.textContent = `${getFahrenheit}°F`
		feelsLike.textContent = `Feels like ${currentWeather.feels_like_F}`;
		minTemp.textContent = `L: ${currentWeather.min_f}`;
		maxTemp.textContent = `H: ${currentWeather.max_f}`;
	})

	celcius.addEventListener('click', () => {
		fahrenheit.className = 'fahrenheit';
		celcius.className = 'celcius active';
		let getCelcius = parseInt(currentWeather.temp_C);
		temperature.textContent = `${getCelcius}°C`;
		feelsLike.textContent = `Feels like ${currentWeather.feels_like_C}`;
		minTemp.textContent = `L: ${currentWeather.min_c}`;
		maxTemp.textContent = `H: ${currentWeather.max_c}`;
		
	})

}
