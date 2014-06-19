(function() {
    'use strict';

    productCtrl.$inject = ['$scope', 'pack'];
    ambro.controller('productCtrl', productCtrl);
    function productCtrl($scope, pack) {
        $scope.package = pack;
    }
}());