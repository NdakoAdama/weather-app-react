import React from "react";
import axios from "axios";


export default function Weather () {

    function handleResponse(response) {
        alert(`The weather in New york is ${response.data.main.temp}℃`)
    }
    let apiKey = "806822236a205c516940bf3338b739e0";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=806822236a205c516940bf3338b739e0&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
    <h1>Adama</h1>
    )
}