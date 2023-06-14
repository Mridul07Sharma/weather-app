const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f8753323amsh9c43b9f17cc1fedp1138f6jsn72f8b918e5c7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
    cityName.innerHTML=city;
        fetch(url+city, options)
        .then(response=>response.json())
        .then((response)=>{
            cloud_pct.innerHTML=response.cloud_pct
            temp.innerHTML=response.temp
            temp2.innerHTML=response.temp
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            humidity2.innerHTML=response.humidity
            min_temp.innerHTML=response.min_temp
            max_temp.innerHTML=response.max_temp
            wind_speed.innerHTML=response.wind_speed
            wind_degrees.innerHTML=response.wind_degrees
            sunrise.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
            sunset.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
            console.log(response);
        })
        
            
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Dalhousie");
let location1="London";
const getWeather2 = (location1) =>{
        fetch(url+location1, options)
        .then(response=>response.json())
        .then((response)=>{
            cloud_pct2.innerHTML=response.cloud_pct
            temp_2.innerHTML=response.temp
            feels_like2.innerHTML=response.feels_like
            humidity_2.innerHTML=response.humidity
            min_temp2.innerHTML=response.min_temp
            max_temp2.innerHTML=response.max_temp
            wind_speed2.innerHTML=response.wind_speed
            wind_degrees2.innerHTML=response.wind_degrees
            sunrise2.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
            sunset2.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
            console.log(response);
        })
}
getWeather2(location1);

let location2="Adelaide";
const getWeather3 = (location2) =>{
    fetch(url+location2, options)
    .then(response=>response.json())
    .then((response)=>{
        cloud_pct3.innerHTML=response.cloud_pct
        temp3.innerHTML=response.temp
        feels_like3.innerHTML=response.feels_like
        humidity3.innerHTML=response.humidity
        min_temp3.innerHTML=response.min_temp
        max_temp3.innerHTML=response.max_temp
        wind_speed3.innerHTML=response.wind_speed
        wind_degrees3.innerHTML=response.wind_degrees
        sunrise3.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
        sunset3.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
        console.log(response);
    })
}
getWeather3(location2);

let location3="Munich";
const getWeather4 = (location3) =>{
    fetch(url+location3, options)
    .then(response=>response.json())
    .then((response)=>{
        cloud_pct4.innerHTML=response.cloud_pct
        temp4.innerHTML=response.temp
        feels_like4.innerHTML=response.feels_like
        humidity4.innerHTML=response.humidity
        min_temp4.innerHTML=response.min_temp
        max_temp4.innerHTML=response.max_temp
        wind_speed4.innerHTML=response.wind_speed
        wind_degrees4.innerHTML=response.wind_degrees
        sunrise4.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
        sunset4.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
        console.log(response);
    })
}
getWeather4(location3);

let location4="Kolkata";
const getWeather5 = (location4) =>{
    fetch(url+location4, options)
    .then(response=>response.json())
    .then((response)=>{
        cloud_pct5.innerHTML=response.cloud_pct
        temp5.innerHTML=response.temp
        feels_like5.innerHTML=response.feels_like
        humidity5.innerHTML=response.humidity
        min_temp5.innerHTML=response.min_temp
        max_temp5.innerHTML=response.max_temp
        wind_speed5.innerHTML=response.wind_speed
        wind_degrees5.innerHTML=response.wind_degrees
        sunrise5.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
        sunset5.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
        console.log(response);
    })
}
getWeather5(location4);

let location5="Delhi";
const getWeather6 = (location5) =>{
    fetch(url+location5, options)
    .then(response=>response.json())
    .then((response)=>{
        cloud_pct6.innerHTML=response.cloud_pct
        temp6.innerHTML=response.temp
        feels_like6.innerHTML=response.feels_like
        humidity6.innerHTML=response.humidity
        min_temp6.innerHTML=response.min_temp
        max_temp6.innerHTML=response.max_temp
        wind_speed6.innerHTML=response.wind_speed
        wind_degrees6.innerHTML=response.wind_degrees
        sunrise6.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
        sunset6.innerHTML=new Date(response.sunset*1000).toLocaleTimeString();
        console.log(response);
    })
}
getWeather6(location5);