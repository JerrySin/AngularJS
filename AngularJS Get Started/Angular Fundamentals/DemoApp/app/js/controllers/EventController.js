'use strict';


eventsApp.controller('EventController', function ($scope, $sce) {
    $scope.trustAsHtml = $sce.trustAsHtml;
    $scope.seStyle = {'font-size':'10px','color':'#d82'};
    $scope.evenStyle = 'evenStyle';
    $scope.oddStyle = 'oddStyle';
    $scope.event = {
        name: 'Scroll Down',
        date: '1/1/2018',
        time: '10:20 am',
        location: {
            address: 'Puking Casino',
            city: 'Macau',
            country: 'China'
        },
        imageUrl: 'https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png',
        sessions: [{
                name: 'Controller & Scope',
                duration: '3m 45s',
                level: 'beginner',
                view: 3,
                description: 'I have a jsp page which displays an arcgis <i style="color:green">map</i> using javascript.',
                visibility: false
            },
            {
                name: 'Markup & Binding',
                duration: '4m 05s',
                level: 'beginner',
                view: 0,
                description: 'I need to use some of the javascript on a <strong style="color:red">different</strong> page which is not a map page.',
                visibility: true

            },
            {
                name: 'Filters',
                duration: '9m 23s',
                level: 'intermedia',
                view: 4,
                description: 'I am using the <b style="color:#333399;">same code to initialize the dojoConfig variable with paths</b> to my javascript files but the dojo loader throws an error when it tries to load the file in the require.',
                visibility: false
            },
            {
                name: 'Validation',
                duration: '1m 46s',
                level: 'advanced',
                view: 6,
                description: 'We have started building an ionic app and we want to <a href="#">add a click handler</a> to HTML content which is dynamically inserted into the page from the database.',
                visibility: false
            }
        ]
    };

    $scope.upViewSession = function(session){
        session.view++;
    };

    $scope.downViewSession = function(session){
        session.view--;
    };
});