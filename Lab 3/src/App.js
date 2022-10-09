export default class App {
    constructor(api_key) {
        this.apiKey = api_key;
        //console.log("Class works!! " + this.apiKey);
        this.getLocation();
        this.bookISBN = "";
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
                this.getBookCover(data);
            })
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        //let temp = "-10";
        //console.log(temp);
        document.querySelector("h1").innerHTML = "It's " + temp + " °C outside";

        if(temp < 0) {
            this.bookISBN = "9781101885956"; //The Bear and the Nightingale
        }
        
    }

    getBookCover(data) {
        //console.log("Getting book cover");
        fetch("https://covers.openlibrary.org/b/isbn/"+ this.bookISBN +".json")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.showBookCover(data)
            })

    }

    showBookCover(data) {
        const cover = data.source_url;
        //console.log(cover);
        document.querySelector("#cover").src = cover;
    }
}