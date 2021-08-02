const apiKey = '3856ea6ad51822a0a42025c42da6f529'
const apiKeyG = "AIzaSyC-bffLGJhmZCXj58VH2-NQxfCO8k4QfLg"

let d = new Date();
let getDay = d.getDay(); 
let getHour = d.getHours();
var weekday = new Array(7);
weekday[0] = "Sunday"
weekday[1] = "Monday"
weekday[2] = "Tuesday"
weekday[3] = "Wednesday"
weekday[4] = "Thursday"
weekday[5] = "Friday"
weekday[6] = "Saturday"

const boxOne = document.getElementById('boxOne')
const zipForm = document.querySelector('#zip-form')
const zipCode = document.querySelector('#zip')
const bxOneCity = document.getElementById('bxOne-city')
const bxOneTemp = document.getElementById('bxOne-temp')
const bxOneDescription = document.getElementById('bxOne-description')
const bxOneHighLow = document.getElementById('bxOne-highLow')
const bxOneHumidity = document.getElementById('hummidity')
const bxOneWind = document.getElementById('bxOne-wind')

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

document.getElementById('inputBtn').onclick = function (){
    boxOne.style.visibility = 'visible'
}

function someFunc(e) {
    e.preventDefault();
     axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},us&appid=${apiKey}&units=imperial`).then((res) => {
    let bxCity = res.data.name
    let bxTemp = res.data.main.temp 
    let bxDescription = res.data.weather[0].description
    let bxHumidity = res.data.main.humidity 
    let bxDayHigh = res.data.main.temp_max
    let bxDayMin = res.data.main.temp_min
    let bxWindDeg = res.data.wind.deg
    let bxWindSpeed = res.data.wind.speed
    console.log(bxWindDeg, bxWindSpeed)
    console.log(res.data)
    bxOneCity.append(bxCity + ", Weather")
    bxOneTemp.append(Math.round(bxTemp) + "°")
    bxOneDescription.append(bxDescription)
    bxOneHumidity.append("Humidity: " + bxHumidity + "%")
    bxOneHighLow.append(Math.round(bxDayHigh)+ "°" + "/" + (Math.round(bxDayMin))+ "°")
    bxOneWind.append(degToCompass(bxWindDeg) + " " + (Math.round(bxWindSpeed)) + " mph")
    })  
}

zipForm.addEventListener('submit', someFunc)

