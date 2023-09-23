function buscar() {
    var cidade = document.getElementById("cidade").value;
    var apiKey = 'cf72ed7831c372da6233ad2edffa12a2';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
    var request = new XMLHttpRequest();

    request.open('GET', apiUrl);
    request.onerror = function (e) {
        document.getElementById('descricao').innerHTML = 'API INDISPONÍVEL OU CIDADE INVÁLIDA';
    }

    request.onload = () => {
        var response = JSON.parse(request.responseText);
        if (response.cod !== 200) {
        	document.getElementById('titulo').innerHTML = 'CIDADE NÃO ENCONTRADA';
        }else{
            var temperatura = Math.round(response.main.temp);
            var descricao = response.weather[0].description;
            var umidade = response.main.humidity;
			const icone = response.weather[0].icon;

            document.getElementById('titulo').innerHTML = 'Tempo em '+cidade;
            document.getElementById('iconeTempo').innerHTML = `<img src="https://openweathermap.org/img/w/${icone}.png">`;
            document.getElementById('temperatura').innerHTML = temperatura+'°C';
            document.getElementById('descricao').innerHTML = descricao;
            document.getElementById('umidade').innerHTML = 'Umidade: '+umidade+'%';
        }
    }
    request.send();
}

