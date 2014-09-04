(function() {
    'use strict';

    packageSrv.$inject = ['apiSrv'];
    ambro.factory('packageSrv', packageSrv);
    function packageSrv(apiSrv) {
        var self = {};

        self.create = function() {
            return new apiSrv.package();
        };

        self.getPackages = function() {
            return apiSrv.package.query().$promise;
        };

        self.getPastries = function() {
            return apiSrv.package.getPastries().$promise;
        };

        self.getCookies = function() {
            return apiSrv.package.getCookies().$promise;
        };

        self.getAssortments = function () {
            return apiSrv.package.getAssortments().$promise;
        };
        self.getSeasonal = function () {
            return apiSrv.package.getSeasonal().$promise;
        };
        self.getPackageById = function(packageId) {
            return apiSrv.package.get({packageId: packageId}).$promise;
        };

        return self;
    }
}());