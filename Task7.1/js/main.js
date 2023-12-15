async function showWeather() {
    let city = document.getElementById('city').value;
    if (city && /[A-Za-z ]/.test(city)) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=577b3bd2eec54e5a84a1ae825e746783`, true)
        xhr.send();

        xhr.onload = async function () {
            if (xhr.status === 404) {
                alert("Введённый город не найден");
            } else if (xhr.status !== 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=577b3bd2eec54e5a84a1ae825e746783`)
                    .then(function (response) {
                        return response.json()
                        // if(response.ok) {
                        //     return response.json()
                        // } else {
                        //     alert ("Введённый город не найден");
                        // }
                    })
                    .then(function (data) {
                        console.log(data);
                        document.querySelector('.day__name-city').textContent = data.name;
                        // document.querySelector('.day__date').textContent = data.
                        document.querySelector('.day__icon').innerHTML = `<img src="http://openweathermap.org
/img/w/${data.weather[0].icon}.png" alt="Иконка погоды">`;
                        document.querySelector('.day__weather').innerHTML = data.weather[0].main;
                        document.querySelector('.day__clouds').textContent = `Облачность: ${data.clouds.all}%`;
                        document.querySelector('.day__temperature').innerHTML = `Температура воздуха: ${Math.round(data.main.temp - 273)}&deg;`;
                        document.querySelector('.day__pressure').innerHTML = `Атмосферное давление: ${Math.round(data.main.pressure * 0.750063755419211)} мм. рт. ст.`;
                        document.querySelector('.day__humidity').textContent = `Влажность воздуха: ${data.main.humidity}%`;
                    })
            }
        }
    } else alert("Поле заполнено неверно");
}