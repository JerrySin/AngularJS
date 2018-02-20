// ============================== ProductController ==============================
// Insert HTML into view
// https://stackoverflow.com/questions/9381926/insert-html-into-view
// https://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu

// AngularJS using $sce.trustAsHtml with ng-repeat
// https://stackoverflow.com/questions/24459194/angularjs-using-sce-trustashtml-with-ng-repeat

(function () {

    var ProductController = function ($scope, $sce) {

        $scope.title = "SONOFF 10A 2200W Wifi Smart Home Power US Standard Support Alexa";
        description = "Overview:<br>Home automation is \"The Internet of Things\". It simply means the way all devices or appliances are networked together to provide customers with a seamless control over their home equipment.<br>Users can instantly convert any plug into a smart outlet with a convenient timer function that works on user\'s smartphone. You can turn on/off any connected device either on the APP eWeLink or by pressing the manual control knob.  This makes it perfect to control lighting and other home appliances.";
        $scope.description = $sce.trustAsHtml(description);

        var products = [{
                country: "USA",
                //$scope.description = "Overview:<br>Home automation is \"The Internet of Things\". It simply means the way all devices or appliances are networked together to provide customers with a seamless control over their home equipment.<br>Users can instantly convert any plug into a smart outlet with a convenient timer function that works on user\'s smartphone. You can turn on/off any connected device either on the APP eWeLink or by pressing the manual control knob.  This makes it perfect to control lighting and other home appliances.";
                voltage: "110v",
                features:"<li>Priority email support</li><li>Help center access</li>",
                link: "Sign up for free"
            },
            {
                country: "CANADA",
                //$scope.description = "Overview:<br>Home automation is \"The Internet of Things\". It simply means the way all devices or appliances are networked together to provide customers with a seamless control over their home equipment.<br>Users can instantly convert any plug into a smart outlet with a convenient timer function that works on user\'s smartphone. You can turn on/off any connected device either on the APP eWeLink or by pressing the manual control knob.  This makes it perfect to control lighting and other home appliances.";
                voltage: "110v",
                features:"<li>Priority email support</li><li>Help center access</li>",
                link: "Get started"
            },
            {
                country: "ENGLAND",
                //$scope.description = "Overview:<br>Home automation is \"The Internet of Things\". It simply means the way all devices or appliances are networked together to provide customers with a seamless control over their home equipment.<br>Users can instantly convert any plug into a smart outlet with a convenient timer function that works on user\'s smartphone. You can turn on/off any connected device either on the APP eWeLink or by pressing the manual control knob.  This makes it perfect to control lighting and other home appliances.";
                voltage: "230v",
                features:"<li>Priority email support</li><li>Help center access</li>",
                link: "Get started"
            }
        ]
        $scope.products = products;
        $scope.trustAsHtml = $sce.trustAsHtml;

    };

    app.controller("ProductController", ["$scope", "$sce", ProductController]);

})();