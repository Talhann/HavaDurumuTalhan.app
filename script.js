let url = "https://api.openweathermap.org/data/2.5/weather"
let apiKey = "74d707d0d8bbceda05c75ac5f093d097"

const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function(){
    let searchText = searchInput.value;
    sendRequest(searchText)
    searchInput.value = "";
})

searchInput.addEventListener("keypress", setQuery)

function setQuery(e){
    if(e.key == "Enter"){
        let searchText = searchInput.value
        sendRequest(searchText)
        searchInput.value = "";
    }
}

function sendRequest(newCity){
    let query = `${url}?q=${newCity}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        const city = document.querySelector("#city");
        city.innerHTML = data.name

        const temp = document.querySelector("#temp");
        temp.innerHTML = `${Math.round(data.main.temp)}C°`

        const desc = document.querySelector("#desc");
        desc.innerHTML = data.weather[0].description.toUpperCase()

        const minmax = document.querySelector("#minmax")
        minmax.innerHTML = `${Math.round(data.main.temp_min)}C° / ${Math.round(data.main.temp_max)}C°`
    })
}