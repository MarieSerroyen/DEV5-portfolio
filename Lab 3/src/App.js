export default class App {
    constructor(api_key) {
        this.apiKey = api_key;
        //console.log("Class works!! " + this.apiKey);

        //check if timestamp is older than 10 minutes
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('timestamp') < 600000) {
            const weatherData = JSON.parse(localStorage.getItem('weather'));
           let test = this.displayWeather(weatherData);
            console.log("Weather data from local storage");
            console.log(test);
        } else {
            this.getLocation();
        }
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
                //save data to local storage
                localStorage.setItem("weather", JSON.stringify(data));

                //save timestamp to local storage
                localStorage.setItem("timestamp", Date.now());

                this.displayWeather(data);
                this.getBookCover(data);
            })
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        //console.log(temp);
        document.querySelector("h1").innerHTML = "Het is " + temp + " °C buiten";

        if(temp < 0) {
            this.bookISBN = "9781101885956"; //The Bear and the Nightingale
            document.querySelector("p").innerHTML = "Kruip met een deken op je zetel en lees";
        }
        else if (temp >= 0 && temp < 5) {
            this.bookISBN = "9781444753424"; //Daughter of Smoke and Bone
            document.querySelector("p").innerHTML = "Pak een warme chocolademelk en lees";
        }
        else if (temp >= 5 && temp < 10) {
            this.bookISBN = "9780316273497"; //Stalking Jack the Ripper
            document.querySelector("p").innerHTML = "Blijf gewoon binnen en lees";
        }
        else if (temp >= 10 && temp < 15) {
            this.bookISBN = "1501139231"; //The Seven Husbands of Evelyn Hugo
            document.querySelector("p").innerHTML = "Ga bij je raam zitten en lees";
        }
        else if (temp >= 15 && temp < 20) {
            this.bookISBN = "9780593300916"; //Six Crimson Cranes
            document.querySelector("p").innerHTML = "Ga op je terras zitten en lees";
        }
        else if (temp >= 20 && temp < 25) {
            this.bookISBN = "9780062662835"; //With the Fire on High
            document.querySelector("p").innerHTML = "Neem een lekker koud glas limonade en lees";
        }
        else if (temp >= 25 && temp < 30) {
            this.bookISBN = "9781984806758"; //People We Meet on Vacation
            document.querySelector("p").innerHTML = "Ga ergens iets drinken en lees";
        }
        else if (temp >= 30) {
            this.bookISBN = "9781406372328"; //Love & Gelato
            document.querySelector("p").innerHTML = "Blijf binnen met de airco aan en lees";
        }
    }

    getBookCover(data) {
        //console.log("Getting book cover");
        fetch("https://covers.openlibrary.org/b/isbn/"+ this.bookISBN +".json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                //save bookcover to local storage
                localStorage.setItem("bookcover", JSON.stringify(data));
                this.showBookCover(data)
            })

    }

    showBookCover(data) {
        const cover = data.source_url;
        //console.log(cover);
        document.querySelector("#cover").src = cover;
    }
}