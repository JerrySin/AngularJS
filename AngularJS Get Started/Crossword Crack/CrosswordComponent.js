(function () {
    'use strict';

    angular
        .module('jm.cw')
        .service('xWord', ['$http', '$log', function ($http, $log) {

            
            var xWord = {};
            // var xWord = {
            //     getWordArray: getWordArray,
            //     getWords: getWords
            // };

            var dataUrl = 'letters.js';
            var dataArray;
            var xDimension = 11;
            var yDimension = 11;


            var onComplete = function (response) {
                return response.data;
            };

            var onError = function () {
                $log.log('Error connected');
            };

            xWord.getWordArray = function () {
                return $http.get(dataUrl).then(onComplete, onError);
            };

            xWord.getWords = function () {
                var dataArray = getCrosswordArray().then(onComplete);
            }

            /**
             * @property xWord.setOptions
             * @type {function}
             * @description sets all the default options before making the $http request
             * @param {object} config - config object
             * @property {object} config.scope - scope of the directive
             * @property {boolean} config.compile - to compile html string as angular binded markup
             * @property {string} config.dataUrl - api url to retrieve json data
             * @property {string} config.province - a province
             */

            // xWord.setOptions = function (config) {


            // };


            // xWord.countWords = function () {

            // };

            // xWord.makeRequest = function (configObj) {

            //     // save current config object and push to array
            //     // returns object with rid defined
            //     var config = xWord.setOptions(configObj);

            //     config.fileType = config.contentId.indexOf('intergration') === -1 ? config.fileType : '.xml';

            //     //Take parts of configObj.contentId and remove trailing content id after final /
            //     var parts = config.contentId.split('/'),
            //         removedContentId = config.contentId.replace(parts[parts.length - 1], '');

            //     // Use full config.contentId if dateType is html, if dataType is json reform the $scope.contentId to have json subfolder added to it
            //     config.contentId = config.dataType === 'json' ? removedContentId + '/json/' + parts[parts.length - 1] : config.contentId;

            //     uteContentLoader.path = uteContentLoader.localizedUrl(config) + config.fileType;

            //     $http({
            //         method: config.method,
            //         dataType: config.dataType,
            //         url: config.localContentId || uteEndpoint(uteContentLoader.path, 'cms')
            //     }).then(uteContentLoader.onCMSLoadSuccess.bind(uteContentLoader, config), uteContentLoader.onCMSLoadError.bind(uteContentLoader, config));

            // };


            return xWord;
            // return {
            //     getWordArray: getWordArray
            // };

        }]);


    // The constraints are:

    // 1. Words cannot be repeated.
    // 2. Words can be placed horizontally but only run left to right.
    // 3. Words can be placed vertically but only run high to low.
    // 4. A horizontal word must intersect one or more vertical words.
    // 5. A vertical word must intersect one or more horizontal words.
    // 6. Each word must be delimited by spaces or the grid edge.

})();

// (function () {
//     'use strict';

//     /**
//      * @author Jerry Sin
//      * @class jm.cw
//      */

//     angular
//         .module('jm.cw')

//         /**
//          * @class jm.cw.xWord
//          * @memberOf jm.cw
//          */

//         .directive('xWord', ['$rootScope',
//             '$http',
//             '$cookies',
//             function ($rootScope, $http, $cookies) {
//                 return {
//                     scope: {
//                         // localContentId: '@',
//                         // contentId: '@',
//                         // compile: '=',
//                         // province: '@',
//                         // language: '@'
//                         width = 11,
//                         height = 11
//                     },
//                     controllerAs: 'vm',
//                     replace: true,
//                     restrict: 'A',
//                     controller: ['$scope, $element', function ($scope, $element) {


//                         /**
//                          * @description inits the directive
//                          * @name init
//                          * @memberOf jm.cw.xWord
//                          */
//                         var init = function () {
//                             var settings = {
//                                 scope: $scope,
//                                 element: $element,
//                                 method: 'GET',
//                                 dataType: 'json',
//                                 fileType: '.json',
//                                 resource: 'letters',
//                                 compile: angular.isDefined($scope.compile) && $scope.compile || false
//                             };

//                             $('ins').off().on('click', '.cms-metadata', metadataActive);

//                             $element.addClass('preloader loading');

//                             if (!$rootScope.ute) {
//                                 $rootScope.ute = {
//                                     language: 'en',
//                                     province: 'on'
//                                 };
//                             }

//                             makeRequest(settings);



//                         };

//                         var wordsCount = function () {

//                         };



//                         var load = function () {};

//                     }]
//                 };
//             }
//         ]);

// })();


// (function () {


//     angular.module('ute.ui.content')

//         .directive('uteContentInjector', ['$rootScope',
//             '$templateCache',
//             'uteContentLoader',
//             '$cookies',
//             'uteLocale',
//             function ($rootScope, $templateCache, uteContentLoader, $cookies, uteLocale) {

//                 return {
//                     scope: {
//                         localContentId: '@',
//                         contentId: '@',
//                         compile: '=',
//                         province: '@',
//                         language: '@'
//                     },
//                     replace: true,
//                     restrict: 'EA',
//                     controller: ['$scope', '$element', function ($scope, $element) {

//                         /**
//                          * @description toggle for showing meta data for developer purposes
//                          * @name metaShown
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var metaShown = false;

//                         /**
//                          * @description toggle hidden dev divs and displays metadata after user clicks hidden cms-metadata-toggle div
//                          * @name displayMetadata
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var displayMetadata = function () {

//                             metaShown = !metaShown;
//                             var settings = {
//                                 scope: $scope,
//                                 element: $element,
//                                 method: 'GET',
//                                 dataType: 'json',
//                                 fileType: '.json',
//                                 contentId: $scope.contentId,
//                                 compile: angular.isDefined($scope.compile) && $scope.compile || false,
//                                 language: $scope.language || uteLocale.language(),
//                                 province: $scope.province || uteLocale.province(),
//                                 localContentId: $scope.localContentId
//                             };

//                             metaShown ? uteContentLoader.makeRequest(settings) : $element.children().children()[0].remove();

//                         };

//                         /**
//                          * @description add and removed active from cms-metadata div
//                          * @name metadataActive
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var metadataActive = function () {
//                             $(this).toggleClass('active');
//                         };

//                         /**
//                          * @description inits the directive
//                          * @name init
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var init = function () {

//                             $('ins').off().on('click', '.cms-metadata', metadataActive);

//                             $element.addClass('preloader loading');

//                             if (!$rootScope.ute) {
//                                 $rootScope.ute = {
//                                     language: 'en',
//                                     province: 'on'
//                                 };
//                             }

//                             makeRequest();

//                             //TODO - change .bind to .on method
//                             angular.element(document.getElementById('cms-metadata-toggle')).bind('click', displayMetadata);

//                         };

//                         /**
//                          * @description makes http request, also called by watcher
//                          * @name makeRequest
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var makeRequest = function () {

//                             var settings = {
//                                 scope: $scope,
//                                 element: $element,
//                                 method: 'GET',
//                                 dataType: 'html',
//                                 fileType: '.html',
//                                 contentId: $scope.contentId,
//                                 compile: angular.isDefined($scope.compile) && $scope.compile || false,
//                                 language: $scope.language || uteLocale.language(),
//                                 province: $scope.province || uteLocale.province() || $cookies.get('province') || 'on',
//                                 localContentId: $scope.localContentId
//                             };

//                             uteContentLoader.makeRequest(settings);

//                         };

//                         /**
//                          * @description checks to see if new values are different from the old values then makes an http request again
//                          * @name metaShown
//                          * @param oldValue
//                          * @param newValue
//                          * @memberOf ute-ui.content.uteContentInjector
//                          */
//                         var update = function (oldValue, newValue) {
//                             if ((angular.isUndefinedOrNull(newValue)) || oldValue !== newValue) {
//                                 makeRequest();
//                             }
//                         };

//                         init();

//                         $scope.$watch('language', update);
//                         $scope.$watch('province', update);
//                         $scope.$watch('contentId', update);


//                     }]

//                 };

//             }
//         ]);

// })();






