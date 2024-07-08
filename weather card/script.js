



// const weatherData = {
//     country: 'USA',
//     temperature: 25,
//     humidity: 60,
//     windSpeed: 10,
//     conditions: ['Sunny', 'Clear']
//   };
  
  
//   function printWeatherData({ country, temperature, humidity, windSpeed, conditions }) {
//     console.log(`Country: ${country}`);
//     console.log(`Temperature: ${temperature}°C`);
//     console.log(`Humidity: ${humidity}%`);
//     console.log(`Wind Speed: ${windSpeed} km/h`);
//     // console.log(`Conditions: ${conditions}`);
    
//     processConditions(conditions);
//   }
  
  
//   function processConditions(conditionsArray) {
    
//     conditionsArray.forEach(condition => console.log(`Condition: ${condition}`));
//   }
  

  

 
  
//   printWeatherData(weatherData);



const resturant={
    resturandId:1234,
    name:"apple id",
    cuisine:"french",
    rating:2.0,
    reviews:["excellent service","delicious food"," cozy atmosphere"]
}


function resturantdetails(resturant){
    console.log(resturant.resturandId);
    console.log(resturant.name);
    console.log(resturant.cuisine);
    console.log(resturant.rating);
    // console.log(resturant.reviews);
    showreviews(resturant.reviews)

}

// function showreviews(reviewsarray){
    // reviewsarray.forEach(review =>console.log(${review}));


// }
function showreviews(reviews) {
    // console.log('Processing reviews...');
    reviews.forEach(review => console.log( `Reviews:${review}`));
  }
//   resturantdetails(resturant);


  
