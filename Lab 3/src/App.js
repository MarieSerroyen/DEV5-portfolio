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
        //console.log(lat, lon);
        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                this.displayWeather(data);
            })
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        console.log(temp);
    }
}