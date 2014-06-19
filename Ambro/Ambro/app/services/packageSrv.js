﻿(function() {
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

        return self;
    }
}());