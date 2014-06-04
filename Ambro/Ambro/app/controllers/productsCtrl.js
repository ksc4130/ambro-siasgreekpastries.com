(function() {
    'use strict';

    productsCtrl.$inject = ['$scope', 'products', 'productSrv'];
    ambro.controller('productsCtrl', productsCtrl);
    function productsCtrl($scope, products, productSrv) {
        $scope.products = products;
        console.log('products', products);
    }
}());