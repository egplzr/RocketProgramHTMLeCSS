//f814d1692ebf0889df729beefd2df618
const apiKey = "";
const units = "metric";
const lang = "pt_br"

const app = angular.module("WeatherApp", [])

app.controller('WeatherController', function($scope, $http){
    $scope.cityName = "";
    $scope.city = "";
    $scope.cardActive = false;

    $scope.temperature = "";
    $scope.feelsLike = "";
    $scope.minTemperature = "";
    $scope.maxTemperature = "";
    $scope.humidity = "";
    $scope.windVelocity = "";
    $scope.windDirection = "";
    $scope.iconUrl = "";

    $scope.callApi = async () => {
        const city = $scope.city || localStorage.getItem('city') || "São Paulo";

        const response = await $http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
        );

        const {data} = response;

        const icon = data.weather[0].icon;

        $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        $scope.temperature = Math.round(data.main.temp);
        $scope.feelsLike = Math.round(data.main.feels_like);
        $scope.minTemperature = Math.round(data.main.temp_min);
        $scope.maxTemperature = Math.round(data.main.temp_max);
        $scope.humidity = data.main.humidity.toLocaleString();
        $scope.windVelocity = data.wind.speed.toLocaleString();
        $scope.windDirection = data.wind.deg;
        $scope.cardActive = true;
        $scope.cityName = data.name;
        localStorage.setItem('city', data.name)
        $scope.$apply();
        
    }
});