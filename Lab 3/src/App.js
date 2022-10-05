export default class App {
    constructor(api_key) {
        this.apiKey = api_key;
        //console.log("Class works!! " + this.apiKey);
        this.getLocation();
    }

    getLocation() {
        //console.log("Getting the location");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getWeather(position) {
        //console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);
    }
}