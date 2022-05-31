// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-03-JS/sw.js", {
    scope: "/ICS2O-Unit-6-03-JS/",
  });
}

/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    var tempK = jsonData.main.temp;
    var tempC = 0;
    const feeling = jsonData.weather[0];
    const image = feeling.icon;

    console.log(jsonData.weather);
    document.getElementById("api-image").innerHTML =
      "<img src='https://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Weather Icon' width='60%'><br><h5>";
    (">");

    if (request.status >= 200 && request.status < 400) {
    }

    // Calculate from Kalvin to Celsius
    tempC = tempK - 273.15;

    document.getElementById("api-weather").innerHTML =
      "The current weather is " + tempC.toFixed(2) + " °C";
  } catch (err) {
    console.log(err);
  }
};
getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
);
