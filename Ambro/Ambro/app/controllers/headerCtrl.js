(function() {
    'use strict';

    headerCtrl.$inject = ['$scope', '$location'];
    ambro.controller('headerCtrl', headerCtrl);
    function headerCtrl($scope, $location) {
        $scope.active = function (url) {
            var p = $location.path();
            console.log(p);
            return p.indexOf(url) > -1;
        }
    }
}());