(function() {
    'use strict';

    manageProductsCtrl.$inject = ['$scope', 'productsSrv'];
    ambro.controller('manageProductsCtrl', manageProductsCtrl);

    function manageProductsCtrl($scope, productsSrv) {
        $scope.product = productsSrv.create();

        $scope.submitProduct = function (product) {
            console.log('submit', product);
            product.$save();
        };
    }
}());