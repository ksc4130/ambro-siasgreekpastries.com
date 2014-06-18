(function() {
    'use strict';

    productsCtrl.$inject = ['$scope', 'packages', 'packageSrv'];
    ambro.controller('productsCtrl', productsCtrl);
    function productsCtrl($scope, packages, packageSrv) {
        $scope.packages = packages;
        console.log('packages', packages);
    }
}());