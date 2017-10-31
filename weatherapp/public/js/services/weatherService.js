'use strict';

angular.module('weatherApp')

  .service('WeatherService', function ($http, $q) {

    const API_URL = "http://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=";
    const API_KEY = "7c5ce78a2ff0501fc1657cf229981aac";

    this.get = (city) => {
      let defer = $q.defer();

      $http.get(`${API_URL}${city}&APPID=${API_KEY} `).then((response) => {
        let CITY_DATA = this.webcam(response);
        defer.resolve(response.data);
       }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    }

    this.webcam = (CITY_DATA) => {
      let defer = $q.defer();
      $http.get(`https://webcamstravel.p.mashape.com/webcams/list/nearby=${CITY_DATA.data.coord.lat},${CITY_DATA.data.coord.lon},10?lang=en&show=webcams%3Aimage%2Clocation`, {
        headers: {
          "X-Mashape-Key": "VbN2gIroEBmshcKFN9zyc3zOR6Grp1y2LtWjsnRQjlrsPiUymh"
        }
      }).then((response) => {
        defer.resolve(response.data);
        // webcam_data = response.data.result.webcams;
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };
  });