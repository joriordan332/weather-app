const weatherInput = document.querySelector('.weatherInput');
const search = document.querySelector('.search');

search.addEventListener('click', async () => {
	try {
const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=847c030025fe4efa829142248232707&q='${weatherInput.value}&days=1&aqi=no&alerts=no'`, {mode: 'cors'});
const weatherData = await response.json();
console.log(weatherData);
/*img.src = weatherData.*****.*****.***;*/

} catch (error){
	console.log('Please enter a valid City');
}
weatherInput.value = '';
});

