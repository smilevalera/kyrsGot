const humidityClass = document.querySelector('.huuumidity')
const Pweather = document.querySelector('.weather')
const header = document.querySelector('.header');
const Prosto = document.querySelector('.prosto')
const image = document.querySelector('.img'); 
const tempCard = document.querySelector('.temp_c'); 
const Wind = document.querySelector('.wind');
const Humidity = document.querySelector('.humidity')
const HApi = document.querySelector('.ApiH')
const box = document.querySelector('.circle');
const Container = document.querySelector('.container');
const localTime = document.querySelector('.localTime');
const Apitext = document.querySelector('.Apitext');

const btnVitebsk = document.querySelector('.btnVitebsk');
const btnBrest = document.querySelector('.btnBrest');
const btnMinsk = document.querySelector('.btnMinsk');
const btnMogilev = document.querySelector('.btnMogilev');
const btnGrodno = document.querySelector('.btnGrodno');
const btnGomel = document.querySelector('.btnGomel');
const btnCitys = document.querySelectorAll('.btnCity');

let city = 'Minsk'
let url = `http://api.weatherapi.com/v1/current.json?key=daebc8d0a3d64617ad0153304231402&aqi=no&q=` 
let tempC;

function fetchStart(){
    fetch(url + city) 
    .then(res => res.json()) 
    .then((res) => { 
         console.log(res);
         localTime.innerText = res.location.localtime;
         tempCard.innerText = `${res.current.temp_c}°С`; 
         image.src = 'https:' + res.current.condition.icon; 
         Wind.innerText = `${res.current.wind_kph}km/h`;
         HApi.innerText = `${res.current.humidity}%`;
         Apitext.innerText = res.current.condition.text;



        if(res.current.temp_c <= 0){
            box.style.boxShadow =  '10px 5px 5px 5px rgba(255, 255, 255, 0.616)';
        }
        if(res.current.temp_c >= 10 && res.current.temp_c <50){
            box.style.boxShadow = '10px 5px 5px 5px rgba(255, 217, 0, 0.616)    ';
        }
        if(res.current.temp_c > 0  && res.current.temp_c <= 9){
            box.style.boxShadow = '10px 5px 5px 5px rgba(11, 93, 156, 0.616)'};
    })
}
fetchStart(url);

btnVitebsk.addEventListener('click',  () => addCityInfo(btnVitebsk));
btnBrest.addEventListener('click',  () => addCityInfo(btnBrest));
btnMinsk.addEventListener('click', () => addCityInfo(btnMinsk));
btnMogilev.addEventListener('click',  () => addCityInfo(btnMogilev));
btnGrodno.addEventListener('click',  () => addCityInfo(btnGrodno));
btnGomel.addEventListener('click',  () => addCityInfo(btnGomel));

function addCityInfo(cityBtn){
    city = cityBtn.value;
    for (let item of btnCitys) {
        if(item.value !== city){
            item.classList.remove('newBtnCity');
        } 
        if(item.value === city){ 
            item.classList.add('newBtnCity');
        }
    }
    fetchStart()
};
