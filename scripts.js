
button = document.querySelector('button')
button.addEventListener('click', e=>{
input = document.querySelector('input')
    
    let cityInput = input.value
    let city2 = cityInput.split(" ")
    let city3 = city2.join('%20')


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=e67df4bbb11a8a4f0a25d01f564b8b44`)
    .then((results)=>results.json())
    .then(data=>{
        console.log(data);

        let kelvin = data.main.temp;
        let degC = kelvin - 273.15;
        let degF = Math.floor((degC * 1.8) + 32)

        let description = data.weather[0].description
        let humidity = data.main.humidity
        let wind = data.wind.speed
        let icon = data.weather[0].icon

        console.log(icon);

        let div = document.querySelector('.weather')
        let div2 = document.querySelector('.temp')
        let div3 = document.querySelector('.description')
        let div4 = document.querySelector('.humidity')
        let div5 = document.querySelector('.wind')
        let div6 = document.querySelector('.icon')


        div.innerHTML = `<h2>Weather in ${cityInput}</h2>`

        div2.innerHTML = `<h1>${degF}º F</h1>`

        div3.innerHTML = `${description}`

        div4.innerHTML = `Humidity: ${humidity}%`

        div5.innerHTML = `Wind speed: ${wind} km/h`

        let image = document.createElement('img')
        image.src = `http://openweathermap.org/img/wn/${icon}.png`

        div6.replaceWith(image)

        // let background = document.body.style.backgroundImage
        // background.src = `https://source.unsplash.com/1600x900/?${city3}`;

    })
    
})
