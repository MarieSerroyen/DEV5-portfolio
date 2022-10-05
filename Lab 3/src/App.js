export default class App {
    constructor(api_key) {
        this.apiKey = api_key;
        //console.log("Class works!! " + this.apiKey);
        this.getLocation();
    }

    getLocation() {
        console.log("Getting the location");
    }

}