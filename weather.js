
const btn = document.querySelector('#btn');
const weatherCard = document.querySelector('.weather-card');
const input =document.querySelector('#formGroupExampleInput');

const getWeather = async()=>{
    const apiKey ="21805bff7224936fa25d6cec016a0a4b";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
// https://openweathermap.org/img/wn/${data.weather[0].icon}.png;
const data = await fetch(weatherURL);
const finalData = await data.json(); // it is used to accsess the data of api

if (finalData.cod == 404){
            weatherCard.innerHTML = `<h1> Please enter the correct city name...`;
           input.addEventListener('keyup',()=>{
            weatherCard.innerHTML = ` <h1>Loading...</h1>`        
                                       });
}

else{
weatherCard.innerHTML = ` <div class="card mb-3" style="width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://openweathermap.org/img/wn/${finalData.weather[0].icon}.png" class="img-fluid rounded-start" alt="img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${finalData.name}</h5>
                      <p class="card-text">${finalData.main.temp}℃</p>
                      <p class="card-text"><small class="text-body-secondary">${finalData.weather[0].main} </small></p>
                    </div>
                  </div>
                </div>
              </div>`
              input.value = "";

              input.addEventListener('keyup',()=>{
                weatherCard.innerHTML = ` <h1> Loading.... </h1>`           
                                               });
                                            }
                            }

btn.addEventListener('click',getWeather);
input.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
        getWeather();
    }
});


