(function () {

    var ContractController = function ($scope, $http) {
        // use Full URL or local path
        // request return a promise

        // var promise = $http.get("https://restcountries.eu/rest/v2/capital/beijing");

        // promise.then(function (response) {
        //     $scope.city = response.data;
        // });

        // short form
        // $http.get("https://restcountries.eu/rest/v2/capital/beijing")
        //     .then(function(response){
        //         $scope.cities = response.data;
        //     });
        
        // event
        var resourceUrl = "https://restcountries.eu/rest/v2/capital/beijing";

        var onCityComplete = function(response){
            $scope.cities = response.data;
        };

        var onCityError = function(reason){
            $scope.error = reason;
        };

        $http.get(resourceUrl)
            .then(onCityComplete, onCityError);

        // Return Result
        //[{"name":"China","topLevelDomain":[".cn"],"alpha2Code":"CN","alpha3Code":"CHN","callingCodes":["86"],"capital":"Beijing","altSpellings":["CN","Zhōngguó","Zhongguo","Zhonghua","People's Republic of China","中华人民共和国","Zhōnghuá Rénmín Gònghéguó"],"region":"Asia","subregion":"Eastern Asia","population":1377422166,"latlng":[35.0,105.0],"demonym":"Chinese","area":9640011.0,"gini":47.0,"timezones":["UTC+08:00"],"borders":["AFG","BTN","MMR","HKG","IND","KAZ","PRK","KGZ","LAO","MAC","MNG","PAK","RUS","TJK","VNM"],"nativeName":"中国","numericCode":"156","currencies":[{"code":"CNY","name":"Chinese yuan","symbol":"¥"}],"languages":[{"iso639_1":"zh","iso639_2":"zho","name":"Chinese","nativeName":"中文 (Zhōngwén)"}],"translations":{"de":"China","es":"China","fr":"Chine","ja":"中国","it":"Cina","br":"China","pt":"China","nl":"China","hr":"Kina","fa":"چین"},"flag":"https://restcountries.eu/data/chn.svg","regionalBlocs":[],"cioc":"CHN"}]
    };

    app.controller("ContractController",["$scope","$http",ContractController]);

})();