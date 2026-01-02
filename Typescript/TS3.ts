let city:string="Chennai";
let temperature:number=35;
let isRaining=true;

function weatherReport (city:string,temperature:number,isRaining:boolean):void {
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`)
}

weatherReport(city,temperature,isRaining);