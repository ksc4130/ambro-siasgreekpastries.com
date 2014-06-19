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
            .when('/catering', {
                templateUrl: '/app/tmpls/catering.html'
        })
            .when('/products', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productSrv', function(productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function(packageSrv) {
                        return packageSrv.getPackages();
                    }]
                }
        });
    }

    ambro.config(config);
}());