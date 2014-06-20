(function() {
    'use strict';

    homeCtrl.$inject = ['$scope'];
    ambro.controller('homeCtrl', homeCtrl);
    function homeCtrl($scope) {
        $scope.imgs = [
            { title: 'Baklava', imgUrl: '/Content/img/slider/img_0896.jpg', description: '' },
            { title: 'Melomakarona', imgUrl: '/Content/img/slider/img_0942.jpg', description: '' },
            { title: 'Paximadakia', imgUrl: '/Content/img/slider/img_0950.jpg', description: '' },
            { title: 'Kourambiedes', imgUrl: '/Content/img/slider/img_0907.jpg', description: '' },
            { title: 'Assorted Box', imgUrl: '/Content/img/slider/img_0920two.jpg', description: '' }
        ];
    }
}());