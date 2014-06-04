(function () {
    'use strict';

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/manageProducts', {
                templateUrl: '/app/tmpls/manageProducts.html',
                controller: 'manageProductsCtrl',
                resolve: {
                    categories: ['productSrv', function (productSrv) {
                        return productSrv.getCategories();
                    }],
                    products: ['productSrv', function (productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function (packageSrv) {
                        return packageSrv.getPackages();
                    }]
                }
            });
    }

    ambro.config(config);
}());