const param = {
    url: 'https://api.openweathermap.org/data/2.5/',
    appid: '1e731d63dee2c9036516b5e0f9d229d4',
};

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then((weather) => {
            return weather.json();
        })
        .then(showWeather);
}

function showWeather(data) {
    // console.log(data);
    document.querySelector('.city_name').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML =
        Math.round(data.main.temp) + '&deg';
    document.querySelector(
        '.icon',
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.description').innerHTML =
        data.weather[0].description;
    document.querySelector('.pressure').innerHTML = data.main.pressure + ' hPa';
    let winddeg = data.wind.deg;
    if (315 < winddeg <= 45) {
        document.querySelector('.wind_deg').innerHTML = 'wind north';
    } else if (46 < winddeg <= 135) {
        document.querySelector('.wind_deg').innerHTML = 'wind east';
    } else if (136 < winddeg || winddeg <= 225) {
        document.querySelector('.wind_deg').innerHTML = 'wind south';
    } else if (226 < winddeg <= 315) {
        document.querySelector('.wind_deg').innerHTML = 'wind west';
    }

    document.querySelector('.wind_speed').innerHTML = data.wind.speed + ' m/s';
}

getWeather();
document.querySelector('#city').onchange = getWeather;

// Как усложнить задачу? Мы выводили select руками - верстали в html. Дальше - не обязательно. Создайте объект в формате

const cities = {
    2643743: 'London',
    703448: 'Kyiv',
    2968815: 'Paris',
};

function createSelect() {
    let select = document.createElement('select');
    for (let key in cities) {
        let option = document.createElement('option');
        select.append(option);
        document.getElementById('city').append(option);
        option.innerHTML = cities[key];
        option.value = key;
    }
}
createSelect();
// С помощью createElement создайте select и перебирая cities наполните select элементами option...

// Дизайн - произвольный.
