(function () {
    'use strict';

    var app = angular.module('app', []);

    app.config(function ($provide) {
        $provide.provider('websites', function () {
            this.$get = function () {
                var appName = 'SiteLogger';
                var appDesc = 'Track with websites which you browsed.';

                return {
                    appName: appName,
                    appDesc: appDesc
                };
            };
        });

    });
})();