// const apiKey = '3856ea6ad51822a0a42025c42da6f529'
// const apiKeyG = "AIzaSyC-bffLGJhmZCXj58VH2-NQxfCO8k4QfLg"

// //getting the Divs
// const scrnTwoOne = document.getElementById('day-one')
// const scrnTwoTwo = document.getElementById('day-two')
// const scrnTwoThree = document.getElementById('day-three')
// const scrnTwoFour = document.getElementById('day-four')
// const scrnTwoFive = document.getElementById('day-five')
// const scrnTwoSix = document.getElementById('day-six')
// const scrnTwoSeven = document.getElementById('day-seven')
// const dayOneDay = document.getElementById('day-one-day')
// const dayOneMinn = document.getElementById('day-one-min')
// const dayOneMax = document.getElementById('day-one-max')
// const dayOneDesc = document.getElementById('day-one-desc')
// const dayOneHumidityy = document.getElementById('day-one-humidity')
// const dayTwoDay = document.getElementById('day-two-day')
// const dayTwoMinn = document.getElementById('day-two-min')
// const dayTwoMax = document.getElementById('day-two-max')
// const dayTwoDesc = document.getElementById('day-two-desc')
// const dayTwoHumidityy = document.getElementById('day-two-humidity')
// const dayThreeDay = document.getElementById('day-three-day')
// const dayThreeMinn = document.getElementById('day-three-min')
// const dayThreeMax = document.getElementById('day-three-max')
// const dayThreeDesc = document.getElementById('day-three-desc')
// const dayThreeHumidityy = document.getElementById('day-three-humidity')
// const dayFourDay = document.getElementById('day-four-day')
// const dayFourMinn = document.getElementById('day-four-min')
// const dayFourMax = document.getElementById('day-four-max')
// const dayFourDesc = document.getElementById('day-four-desc')
// const dayFourHumidityy = document.getElementById('day-four-humidity')
// const dayFiveDay = document.getElementById('day-five-day')
// const dayFiveMinn = document.getElementById('day-five-min')
// const dayFiveMax = document.getElementById('day-five-max')
// const dayFiveDesc = document.getElementById('day-five-desc')
// const dayFiveHumidityy = document.getElementById('day-five-humidity')
// const daySixDay = document.getElementById('day-six-day')
// const daySixMinn = document.getElementById('day-six-min')
// const daySixMax = document.getElementById('day-six-max')
// const daySixDesc = document.getElementById('day-six-desc')
// const daySixHumidityy = document.getElementById('day-six-humidity')
// const daySevenDay = document.getElementById('day-seven-day')
// const daySevenMinn = document.getElementById('day-seven-min')
// const daySevenMax = document.getElementById('day-seven-max')
// const daySevenDesc = document.getElementById('day-seven-desc')
// const daySevenHumidityy = document.getElementById('day-seven-humidity')
// //Get Day / Get hour
// let d = new Date();
// let getDay = d.getDay(); 
// let getHour = d.getHours();
// var weekday = new Array(7);
// weekday[0] = "Sunday"
// weekday[1] = "Monday"
// weekday[2] = "Tuesday"
// weekday[3] = "Wednesday"
// weekday[4] = "Thursday"
// weekday[5] = "Friday"
// weekday[6] = "Saturday"

// console.log(getDay)

// let lat;
// let lon;

// const successCallback = (position) =>{
//     console.log(position)
// }
// const errorCallback = (error) => {
//     console.log(error)
//     alert('This app wont work without your location!')
// }

// if ('geolocation' in navigator) {
//     console.log('geolocation is available');
//     navigator.geolocation.getCurrentPosition(position =>{

//         lon = position.coords.longitude
//         lat = position.coords.latitude
//         axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude={part}&appid=${apiKey}`).then((res)=>{
//             let dayZeroMin = res.data.daily[getDay].temp.min
//             let dayZeroMax = res.data.daily[getDay].temp.max
//             let dayZeroDescription = res.data.daily[getDay].weather[0].description
//             let dayZeroHumidity = res.data.daily[getDay].humidity
//             let dayOneMin = res.data.daily[getDay + 1].temp.min
//             let dayOneMax = res.data.daily[getDay + 1].temp.max
//             let dayOneDescription = res.data.daily[getDay + 1].weather[0].description
//             let dayOneHumidity = res.data.daily[getDay + 1].humidity
//             let dayTwoMin = res.data.daily[getDay + 2].temp.min
//             let dayTwoMax = res.data.daily[getDay + 2].temp.max
//             let dayTwoDescription = res.data.daily[getDay + 2].weather[0].description
//             let dayTwoHumidity = res.data.daily[getDay + 2].humidity
//             let dayThreeMin = res.data.daily[getDay + 3].temp.min
//             let dayThreeMax = res.data.daily[getDay + 3].temp.max
//             let dayThreeDescription = res.data.daily[getDay + 3].weather[0].description
//             let dayThreeHumidity = res.data.daily[getDay + 3].humidity
//             let dayFourMin = res.data.daily[getDay + 4].temp.min
//             let dayFourMax = res.data.daily[getDay + 4].temp.max
//             let dayFourDescription = res.data.daily[getDay + 4].weather[0].description
//             let dayFourHumidity = res.data.daily[getDay + 4].humidity
//             let dayFiveMin = res.data.daily[getDay + 5].temp.min
//             let dayFiveMax = res.data.daily[getDay + 5].temp.max
//             let dayFiveDescription = res.data.daily[getDay + 5].weather[0].description
//             let dayFiveHumidity = res.data.daily[getDay + 5].humidity
//             let daySixMin = res.data.daily[getDay].temp.min
//             let daySixMax = res.data.daily[getDay].temp.max
//             let daySixDescription = res.data.daily[getDay].weather[0].description
//             let daySixHumidity = res.data.daily[getDay].humidity
            
        
//             dayOneDay.append(weekday[getDay])
//             dayOneMinn.append(Math.round(dayZeroMin) + "°" + "/" + (Math.round(dayZeroMax))+ "°")
//             dayOneDesc.append(dayZeroDescription  + "      ")
//             dayOneHumidityy.append("Humidity: " + dayZeroHumidity + "%")
            
//             dayTwoDay.append(weekday[getDay + 1])
//             dayTwoMinn.append(Math.round(dayOneMin) + "°" + "/" + (Math.round(dayOneMax))+ "°")
//             dayTwoDesc.append(dayOneDescription)
//             dayTwoHumidityy.append("Humidity: " + dayOneHumidity + "%")

//             dayThreeDay.append(weekday[getDay + 2])
//             dayThreeMinn.append(Math.round(dayThreeMin) + "°" + "/" + (Math.round(dayTwoMax))+ "°")
//             dayThreeDesc.append(dayThreeDescription)
//             dayThreeHumidityy.append("Humidity: " + dayThreeHumidity + "%")

//             dayFourDay.append(weekday[getDay + 3])
//             dayFourMinn.append(Math.round(dayFourMin) + "°" + "/" + (Math.round(dayThreeMax))+ "°")
//             dayFourDesc.append(dayThreeDescription)
//             dayFourHumidityy.append("Humidity: " + dayThreeHumidity + "%")

//             dayFiveDay.append(weekday[getDay + 4])
//             dayFiveMinn.append(Math.round(dayFiveMin) + "°" + "/" + (Math.round(dayFourMax))+ "°")
//             dayFiveDesc.append(dayFourDescription)
//             dayFiveHumidityy.append("Humidity: " + dayFourHumidity + "%")
            
//             daySixDay.append(weekday[getDay + 5])
//             daySixMinn.append(Math.round(daySixMin) + "°" + "/" + (Math.round(dayFiveMax))+ "° ")
//             daySixDesc.append(dayFiveDescription)
//             daySixHumidityy.append("Humidity: " + dayFiveHumidity + "%")
            
//             // daySevenDay.append(weekday[getDay + 6])
            
//                 if(weekday[getDay + 6] == undefined) {
//                     daySevenDay.append(weekday[getDay - 6])
//                 } 
            
//             daySevenMinn.append(Math.round(daySixMin) + "°" + "/" + (Math.round(daySixMax))+ "° ")
//             daySevenDesc.append(daySixDescription)
//             daySevenHumidityy.append("Humidity: " + daySixHumidity + "%")

//             console.log(res.data)
//     })
//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${apiKeyG}`).then((res) => {
        
        


//     })
//     })
// } else {
//     console.log('geolocation not available')
// }

