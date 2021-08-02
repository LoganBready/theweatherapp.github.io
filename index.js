// API Keys
const apiKey = '3856ea6ad51822a0a42025c42da6f529'
const apiKeyG = "AIzaSyC-bffLGJhmZCXj58VH2-NQxfCO8k4QfLg"

//Getting the Day/Time
let d = new Date();
let getDay = d.getDay(); 
let getHour = d.getHours();
let getMinute = d.getMinutes();
let getSeconds = d.getSeconds();
let theCurrentTime = getHour + ":" + getMinute
console.log(theCurrentTime)
var weekday = new Array(7);
weekday[0] = "Sunday"
weekday[1] = "Monday"
weekday[2] = "Tuesday"
weekday[3] = "Wednesday"
weekday[4] = "Thursday"
weekday[5] = "Friday"
weekday[6] = "Saturday"
//Getting Divs
const bxOneCity = document.getElementById('bxOne-city')
const bxOneTimeZone = document.getElementById('bxOne-time')
const bxOneTemp = document.getElementById('bxOne-temp')
const bxOneDescription = document.getElementById('bxOne-description')
const bxOneHighLow = document.getElementById('bxOne-highLow')
const bxOneWindSpeed = document.getElementById('bxOne-wind')
const bxTwoWords = document.getElementById('bxTwo-words')
const bxTwoMorning = document.getElementById('bxTwo-Morning')
const bxTwoAfternoon = document.getElementById('bxTwo-Afternoon')
const bxTwoEvening = document.getElementById('bxTwo-evening')
const bxTwoNight = document.getElementById('bxTwo-night')
//Lat/lon
let lat;
let lon;
//Checking Geo Locator
const successCallback = (position) =>{
    console.log(position)
}
const errorCallback = (error) => {
    console.log(error)
    alert('Your browser doesnt support geolocation.  Try the zipcode tab')
}
//Degrees to compas
function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}
// API Calls
if ('geolocation' in navigator) {
    console.log('geolocation is available')
    navigator.geolocation.getCurrentPosition(position => {
        lon = position.coords.longitude
        lat = position.coords.latitude
        console.log(lat, lon)
        //Open weather API calls
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude={part}&appid=${apiKey}`).then((res)=> {
            console.log(res.data)
            let timeZone = res.data.timezone
            let currentTemp = res.data.current.temp
            let description = res.data.current.weather[0].description
            let dayHigh = res.data.daily[getDay].temp.max
            let dayLow = res.data.daily[getDay].temp.min
            let dayMorning = res.data.daily[getDay].temp.morn 
            let dayAfternoon = res.data.daily[getDay].temp.day
            let dayEvening = res.data.daily[getDay].temp.eve
            let dayNight = res.data.daily[getDay].temp.night
            let bxOneWindDeg = res.data.current.wind_deg
            let bxWindSpeed = res.data.current.wind_speed
            //Appends
            bxOneTimeZone.append("As of " + theCurrentTime + " " + timeZone)
            bxOneTemp.append(Math.round(currentTemp) + "°")
            bxOneDescription.append(description)
            bxOneWindSpeed.append(degToCompass(bxOneWindDeg) + " " + (Math.round(bxWindSpeed)) + " mph")
            bxOneHighLow.append(Math.round(dayHigh) + "°" + " / " + Math.round(dayLow) + "°")
            bxTwoMorning.append(Math.round(dayMorning) + "°")
            bxTwoAfternoon.append(Math.round(dayAfternoon) + "°")
            bxTwoEvening.append(Math.round(dayEvening) + "°")
            bxTwoNight.append(Math.round(dayNight) + "°")
        })
        //Google API calls
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${apiKeyG}`).then((res)=> {
            console.log(res.data)
        let city = res.data.results[2].address_components[1].long_name 
        let state = res.data.results[2].address_components[3].long_name
        //Appends
        bxOneCity.append(city + ", " + state + " Weather")
        bxTwoWords.append("Today's Weather for " + city + ", " + state)
        })
    })
}
