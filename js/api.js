
let searchInput =document.getElementById('searchInput')
let city =document.getElementById('city')
let icon=document.getElementById('icon')
let discreption=document.getElementById('discreption')
let icon2 =document.getElementById('icon2')
let tmpLow =document.getElementById('tmpLow')
let discreption2 =document.getElementById('discreption2')
let icon3 =document.getElementById('icon3')



//`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`
async function fetchApi(city='cairo') {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
let result = await response.json()
console.log(result);
display(result)


}


function display(result){


    city.innerHTML=result.location.name
document.getElementById('tmp').innerHTML=result.forecast.forecastday[0].day.maxtemp_c
icon.setAttribute('src',`https:${result.forecast.forecastday[0].day.condition.icon}`)
discreption.innerHTML=result.forecast.forecastday[0].day.condition.text
icon2.setAttribute('src',`https:${result.forecast.forecastday[1].day.condition.icon}`)
document.getElementById('tmp1').innerHTML=result.forecast.forecastday[1].day.maxtemp_c
tmpLow.innerHTML=result.forecast.forecastday[1].day.mintemp_c
discreption2.innerHTML=result.forecast.forecastday[1].day.condition.text
icon3.setAttribute('src',`https:${result.forecast.forecastday[2].day.condition.icon}`)
tmpLow2.innerHTML=result.forecast.forecastday[2].day.mintemp_c
document.getElementById('tmp2').innerHTML=result.forecast.forecastday[2].day.maxtemp_c
document.getElementById('discreption3').innerHTML=result.forecast.forecastday[2].day.condition.text



let days = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ];

let d1 = new Date(result.forecast.forecastday[0].date);
let dayName = days[d1.getDay()+1];
document.getElementById('day1').innerHTML=dayName

let d2 = new Date(result.forecast.forecastday[1].date);
let dayName2 = days[d2.getDay()+1];
document.getElementById('day2').innerHTML=dayName2

let d3 = new Date(result.forecast.forecastday[2].date);
let dayName3 = days[d3.getDay()+1];
document.getElementById('day3').innerHTML=dayName3


let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let m = new Date(result.forecast.forecastday[0].date);
let month =monthNames[m.getMonth(m)]

document.getElementById('mmonth').innerHTML=month



}


fetchApi("cairo")
searchInput.addEventListener('keyup',function (){
    

    fetchApi(searchInput.value)
})



