﻿(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {

        $routeProvider.otherwise({
                redirectTo: '/'
            })
            .when('/oops', {
                templateUrl: '/app/tmpls/oops.html'
            })
            .when('/', {
                templateUrl: '/app/tmpls/home.html'//,
                //                controller: 'homeCtrl',
                //                resolve: {
                //                    packages: [
                //                        'packageSrv', function(packageSrv) {
                //                            return packageSrv.getPackages();
                //                        }
                //                    ]
                //                }
            })
            .when('/contact', {
                templateUrl: '/app/tmpls/contact.html',
                controller: 'contactCtrl'
            })
            .when('/catering', {
                templateUrl: '/app/tmpls/catering.html',
                controller: 'cateringCtrl'
            })
            .when('/favors', {
                templateUrl: '/app/tmpls/favors.html',
                controller: 'favorsCtrl'
            })
            .when('/testimonials', {
                templateUrl: '/app/tmpls/testimonials.html'
            })
            .when('/about', {
                templateUrl: '/app/tmpls/about.html'
            })
            .when('/find', {
                templateUrl: '/app/tmpls/find.html'
            })
            .when('/products', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: [
                        'productSrv', function (productSrv) {
                            return productSrv.getProducts();
                        }
                    ],
                    packages: [
                        'packageSrv', function (packageSrv) {
                            return packageSrv.getPackages();
                        }
                    ]
                }
            })
            .when('/assortments', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productSrv', function (productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function (packageSrv) {
                        return packageSrv.getAssortments();
                    }]
                }
            })
            .when('/pastries', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productSrv', function (productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function (packageSrv) {
                        return packageSrv.getPastries();
                    }]
                }
            })
            .when('/cookies', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productSrv', function (productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function (packageSrv) {
                        return packageSrv.getCookies();
                    }]
                }
            })
            .when('/seasonal', {
                templateUrl: '/app/tmpls/products.html',
                controller: 'productsCtrl',
                resolve: {
                    products: ['productSrv', function (productSrv) {
                        return productSrv.getProducts();
                    }],
                    packages: ['packageSrv', function (packageSrv) {
                        return packageSrv.getSeasonal();
                    }]
                }
            })
            .when('/product/:packageId', {
                templateUrl: '/app/tmpls/product.html',
                controller: 'productCtrl',
                resolve: {
                    pack: ['packageSrv', '$route', function (productSrv, $route) {
                        console.log($route.current.params.packageId);
                        return productSrv.getPackageById($route.current.params.packageId);
                    }]
                }
            });

        $locationProvider.html5Mode(true);
    }

    ambro.config(config);
}());