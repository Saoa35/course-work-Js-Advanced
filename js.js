
let urlKyiv = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNewYork = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

function getWearher (url, div) {
    fetch(url) 
                .then(resp => resp.json())
                .then(json => {
                    // div.textContent = '';
                    const p = document.createElement('p');
                    p.innerText += '  ' + json.name;
                    p.innerText += '  ' + json.weather[0].description;
                    p.innerText += '  ' + Math.round(json.main.temp - 273.15) + ' ℃';
                    const img = document.createElement('img');
                    img.src = 'http://openweathermap.org/img/wn/' + json.weather[0]['icon'] + '@2x.png';
                    div.append(p);
                    div.append(img);
                })
                // .then(item => console.log(item))
                .catch(error => console.log(error.message));
}

getWearher(urlKyiv, outputKyiv);
getWearher(urlLondon, outputLondon);
getWearher(urlNewYork, outputNewYork);