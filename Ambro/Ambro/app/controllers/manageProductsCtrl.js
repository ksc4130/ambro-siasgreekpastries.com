(function() {
    'use strict';

    manageProductsCtrl.$inject = ['$scope', 'productSrv', 'packageSrv', 'categories', 'products', 'packages'];
    ambro.controller('manageProductsCtrl', manageProductsCtrl);

    function manageProductsCtrl($scope, productSrv, packageSrv, categories, products, packages) {
        $scope.product = productSrv.create();
        $scope.package = packageSrv.create();
        
        $scope.categories = categories;
        $scope.products = products;
        console.log('products', products);
        console.log('packages', packages);

        $scope.submitProduct = function (product) {
            console.log('submit', product);
            product.$save();
        };
    }
}());