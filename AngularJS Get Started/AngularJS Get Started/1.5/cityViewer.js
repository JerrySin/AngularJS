// (function () {
//     'use strict';

//     angular
//         .module('productViewer')
//         .factory('product', product);

//     product.$inject = ['$http', '$log'];

//     function product($http, $log) {
//         var product = {
//                 getCity: getCity
//             },
//             apiUrl;

//         product.apiUrl = "https://restcountries.eu/rest/v2/capital/";

//         return product;

//         ////////////////
//         function getCity(cityName) {
//             $log.log('product service');
//             return $http.get(product.apiUrl + cityName);
//         }

//     }
// })();

/////////////////

(function () {
    'use strict';

    angular
        .module('jmov.product')
        .factory('product', ['$http', '$log', function ($http, $log) {
            var product = {
                    getCity: getCity
                },
                apiUrl;

            product.apiUrl = "https://restcountries.eu/rest/v2/capital/";

            return product;

            ////////////////
            function getCity(cityName) {
                $log.log('product service');
                return $http.get(product.apiUrl + cityName);
            }
        }]);

})();

(function() {
    'use strict';

    angular
        .module('jmov.product')
        .directive('Directive', ['dependency1',function (dependency1) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ProductController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }]);

    
    /* @ngInject */
    function ControllerController () {
        
    }
})();

(function() {
    'use strict';

    angular
        .module('Module')
        .controller('ControllerController', ControllerController);

    ControllerController.$inject = ['dependency1'];
    function ControllerController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();

(function() {
    'use strict';

    angular
        .module('Module')
        .service('Service', Service);

    Service.$inject = ['dependency1'];
    function Service(dependency1) {
        this.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { }
        }
})();