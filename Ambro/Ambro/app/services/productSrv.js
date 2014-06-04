(function() {
    'use strict';

    productSrv.$inject = ['apiSrv'];
    ambro.factory('productSrv', productSrv);
    function productSrv(apiSrv) {
        var self = {};

        self.create = function() {
            return new apiSrv.product();
        };

        self.getProducts = function() {
            return apiSrv.product.query().$promise;
        };

        self.save = function(product) {
            return apiSrv.product.save(product).$promise;
        };

        self.getCategories = function () {
            return apiSrv.product.getCategories().$promise;
        };

        self.getProducts = function () {
            return apiSrv.product.getProducts().$promise;
        };

        return self;
    }
}());