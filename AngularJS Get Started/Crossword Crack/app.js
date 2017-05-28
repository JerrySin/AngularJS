// How to Correctly Use BootstrapJS and AngularJS Together
// https://scotch.io/tutorials/how-to-correctly-use-bootstrapjs-and-angularjs-together

(function () {

    var app = angular.module('jm.cw', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "index.html",
                controller: "CrosswordController"
            })
            .when("/crossword", {
                templateUrl:"",
                controller: ""
            })
            .otherwise({redirectTo: "/main"});



    });

})();