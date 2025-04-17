let citiesData = {
    tehran:{
        city: 'Tehran', temp:12, weather:'Sunny', humidity:23, windSpeed: 32
    },
    shiraz:{
        city: 'Shiraz', temp:22, weather:'Sunny', humidity:33, windSpeed: 30

    }
}

let searchBtn = document.getElementById('search');
let searchBar = document.querySelector('.search-bar')
searchBtn.addEventListener('click', function(){
    let searcgBarValue = searchBar.value
    let mainCityData = citiesData[searcgBarValue]
    console.log(mainCityData)
    document.querySelector('.weather').classList.remove('loading')



})