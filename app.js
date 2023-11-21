const textField = document.getElementById("textOutput");
const button = document.getElementById("submit");
const form = document.getElementById("input");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
let dataJson = "";



async function getTemperatureForLatLong(){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current=temperature_2m`
}



async function getDataJson() {
    const dataPromise = await fetch(url);
    dataJson = await dataPromise.json();
    console.log(dataJson);
}
getDataJson();


button.addEventListener("click", getTemperature);
function getTemperature() {
    const tempValue = dataJson.current.temperature_2m + " " + dataJson.current_units.temperature_2m;
    textField.value = tempValue;
}


