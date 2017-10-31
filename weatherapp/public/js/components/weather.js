'use strict';
angular.module('weatherApp')
  .component('weather', {

    templateUrl: './js/components/weather.html',

    controller: function (WeatherService) {

      this.$onInit = () => {
        this.city = [];
        this.webcams = [];
      }

      this.getWeather = (city) => {
        WeatherService.get(city).then((data) => {
          this.city.push(data.data.name);
          WeatherService.webcam(data).then((data) => {
            data.result.webcams.forEach((webcam) => {
            this.webcams.push(webcam);
            });
        }).catch((error) => {
          this.error = error;
        });
      });
    }
  },

  });