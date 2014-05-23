(function() {
    'use strict';

    productsSrv.$inject = ['apiSrv'];
    ambro.factory('productsSrv', productsSrv);
    function productsSrv(apiSrv) {
        var self = {};

        self.create = function() {
            return new apiSrv.products();
        };

        self.getProducts = function() {
            return apiSrv.products.query().$promise;
        };

        self.save = function(product) {
            return apiSrv.products.save(product).$promise;
        };

        return self;
    }
}());