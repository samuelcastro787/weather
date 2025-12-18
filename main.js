async function buscar() {
    
    // Captura o valor digitado no input e remove espaços extras
    const cidade = document.getElementById('caixa').value.trim();
    
    // Elemento onde mensagens de erro ou aviso serão exibidas
    const alertBox = document.getElementById('alert');
    
    // Container principal que exibe as informações do clima
    const weatherBox = document.querySelector('.weather');

    // Validação: se o campo estiver vazio
    if (!cidade) {
        alertBox.innerHTML = 'Digite uma Cidade'; // Exibe mensagem de aviso
        weatherBox.style.display = 'none' // Oculta os dados do clima
    } else {
        alertBox.innerHTML = '' // Limpa mensagens anteriores
    }

    try {
        // Requisição para a API OpenWeatherMap usando fetch e await
        const resposta1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=23681f5bb0c5543a3dee5affbcfbdac7&units=metric&lang=pt_br`)
        
        // Verifica se a resposta da API não foi bem-sucedida
        if (!resposta1.ok) {
            
            // Lança um erro com o código HTTP (ex: 404)
            throw new Error(resposta1.status);
        }

        // Converte a resposta para JSON
        const tempo = await resposta1.json()

        // Exibe o nome da cidade e o país
        document.getElementById('city').innerHTML = `${tempo.name}, ${tempo.sys.country}`
        
        // Exibe a temperatura atual formatada
        document.getElementById('temp_value').innerHTML = `${tempo.main.temp.toFixed(1).toString().replace('.', ',')} <sup>C°<sup>`
        
        // Exibe a descrição do clima (ex: nublado, ensolarado)
        document.getElementById('temp_description').innerHTML = `${tempo.weather[0].description}`

         // Exibe a temperatura máxima
        document.getElementById('temp_max').innerHTML = `${tempo.main.temp_max.toFixed(1).toString().replace('.', ',')} <sup>C°<sup>`

        // Exibe a temperatura mínima
        document.getElementById('temp_min').innerHTML = `${tempo.main.temp_min.toFixed(1).toString().replace('.', ',')} <sup>C°<sup>`

        // Define o ícone do clima com base no código retornado pela API
        document.getElementById('temp_icon').setAttribute('src', `https://openweathermap.org/img/wn/${tempo.weather[0].icon}@2x.png`)

        // Exibe a umidade do ar
        document.getElementById('temp_umidade').innerHTML = `${tempo.main.humidity}%`

        // Exibe a velocidade do vento
        document.getElementById('temp_vento').innerHTML = `${tempo.wind.speed.toFixed(1).toString().replace('.', ',')}km/h`

        // Mostra o container com as informações do clima após sucesso
        weatherBox.style.display = 'block'
        
    } catch (erro) {
        
        // Oculta os dados do clima em caso de erro
        weatherBox.style.display = 'none';

        // Tratamento específico para erro 404 (cidade não encontrada)
        if (erro.message === '404') {
            alertBox.innerHTML = 'Cidade não encontrada';
        }
    }
}

