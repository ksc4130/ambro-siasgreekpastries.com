(function() {
    'use strict';

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.otherwise('/')
            .when('/', {
                templateUrl: '/app/tmpls/home.html',
                controller: 'homeCtrl'
        })
            .when('/contact', {
            templateUrl: '/app/tmpls/contact.html'
        })
            .when('/manageProducts', {
                templateUrl: '/app/tmpls/manageProducts.html',
                controller: 'manageProductsCtrl'
        })
            .when('/products', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productsSrv', function(productsSrv) {
                        return productsSrv.getProducts();
                    }]
                }
        });
    }

    ambro.config(config);
}());