'use strict';
angular.module('weatherApp')
  .component('weather', {

    templateUrl: './js/components/weather.html',

    controller: function (WeatherService) {

      this.$onInit = () => {
      }

      this.getWeather = (city) => {

        WeatherService.get(city).then((data) => {
          // Save meteo data for the requested city
          this.data = data;

        }).catch((error) => {
          this.error = error;
        });
      }

      this.getWebcam = (data) => {
      WeatherService.webcam(data).then((data) => {
        this.data = data;
      }).catch((error) => {
        this.error = error;
      });
    }

    }

  });