(function() {
    'use strict';

    homeCtrl.$inject = ['$scope', 'packages'];
    ambro.controller('homeCtrl', homeCtrl);
    function homeCtrl($scope, packages) {
        $scope.imgs = packages.map(function(item) {
            return {
                title: item.product.productName,
                imgUrl: item.imgUrl,
                href: '#/product/' + item.id
                //, description: item.product.productDescription
            };
        });

//            [
//            { title: 'Baklava', imgUrl: '/Content/img/slider/img_0896.jpg', description: '' },
//            { title: 'Melomakarona', imgUrl: '/Content/img/slider/img_0942.jpg', description: '' },
//            { title: 'Paximadakia', imgUrl: '/Content/img/slider/img_0950.jpg', description: '' },
//            { title: 'Kourambiedes', imgUrl: '/Content/img/slider/img_0907.jpg', description: '' },
//            { title: 'Assorted Box', imgUrl: '/Content/img/slider/img_0920two.jpg', description: '' }
//        ];
    }
}());