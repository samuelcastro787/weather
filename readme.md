# 🌤️ Projeto Previsão do Tempo

Este projeto é uma **aplicação web de previsão do tempo** desenvolvida com **HTML, CSS e JavaScript**, que consome a API **OpenWeatherMap** para exibir informações climáticas em tempo real de qualquer cidade pesquisada pelo usuário.

O foco do projeto é praticar **consumo de APIs**, **JavaScript assíncrono (`async/await`)**, **manipulação do DOM**, **tratamento de erros** e **boas práticas de UX/UI**.

---

## 🚀 Funcionalidades

* 🔍 Pesquisa de cidades pelo nome
* 🌡️ Exibição da temperatura atual (°C)
* ☁️ Descrição do clima em português
* 🔼 Temperatura máxima
* 🔽 Temperatura mínima
* 💧 Umidade do ar
* 🌬️ Velocidade do vento
* 🖼️ Ícone dinâmico conforme a condição climática
* ⚠️ Tratamento de erros (cidade não encontrada ou campo vazio)
* 🎯 Exibição condicional das informações (só aparecem após a busca)

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** – Estrutura da aplicação
* **CSS3** – Estilização e layout responsivo
* **JavaScript (ES6+)** – Lógica, consumo da API e manipulação do DOM
* **OpenWeatherMap API** – Fonte dos dados climáticos
* **Font Awesome** – Ícones visuais
* **Google Fonts** – Tipografia

---

## 📡 Consumo da API

A aplicação utiliza o endpoint:

```
https://api.openweathermap.org/data/2.5/weather
```

Parâmetros utilizados:

* `q` → Nome da cidade
* `units=metric` → Temperatura em Celsius
* `lang=pt_br` → Descrição em português
* `appid` → Chave da API

---

## 🧠 Conceitos Aplicados

* `async / await` para requisições assíncronas
* `try / catch` para tratamento de erros
* Validação de input do usuário
* Manipulação dinâmica do DOM
* Uso de `fetch()` para consumo de API REST
* Boas práticas de experiência do usuário (UX)

---

## 🎨 Interface

* Layout simples e limpo
* Informações organizadas em cards
* Ícones visuais para facilitar a leitura
* Aplicação responsiva

---

## 📂 Estrutura do Projeto

```
📁 weather
│── index.html
│── style.css
│── main.js
│── README.md
```

---

## 📸 Demonstração

![Preview](/img/preview2.png)

---

## 🔗 API Utilizada

OpenWeatherMap – [https://openweathermap.org/](https://openweathermap.org/)

---
