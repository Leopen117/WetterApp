const textField = document.getElementById("textOutput");
const button = document.getElementById("submit");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
let percipitation = "";

async function getTemperatureForLatLong(){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current=temperature_2m&daily=weather_code`
    const dataPromise = await fetch(url);
    let dataJson = await dataPromise.json();
    console.log("dataJson", dataJson);
    // Regenabfrage:
    if(dataJson.daily.weather_code == 60 | dataJson.daily.weather_code == 61) {
        percipitation = "Heute empfehle ich mindestens eine Regenjacke!";
    } else if(dataJson.daily.weather_code == 62 | dataJson.daily.weather_code == 63) {
        percipitation = "Heute empfehle ich dir eine Regenjacke UND einen Schirm!";
    } else if(dataJson.daily.weather_code == 64 | dataJson.daily.weather_code == 65) {
        percipitation = "Heute empfehle ich dir zu hause zu bleiben oder ein Boot zu nehmen!";
    } else {
        percipitation = "Heute bleibt es trocken!";
    }

    const tempValue = "Es sind aktuell " + dataJson.current.temperature_2m + dataJson.current_units.temperature_2m + "!" + "\n" + percipitation;
    textField.value = tempValue;
}
button.addEventListener("click", getTemperatureForLatLong);




