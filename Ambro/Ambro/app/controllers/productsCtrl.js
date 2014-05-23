(function() {
    'use strict';

    productsCtrl.$inject = ['$scope', 'products', 'productsSrv'];
    ambro.controller('productsCtrl', productsCtrl);
    function productsCtrl($scope, products, productsSrv) {
        $scope.products = products;
        console.log('products', products);
    }
}());