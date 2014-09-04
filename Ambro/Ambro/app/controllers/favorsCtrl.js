(function() {
    'use strict';

    favorsCtrl.$inject = ['$scope', 'utils'];
    ambro.controller('favorsCtrl', favorsCtrl);
    function favorsCtrl($scope, utils) {
        var favorImgs = [
            { imgUrl: '/Content/img/favors/Baby Shower Favor3-Piece Paximadia.jpg' },
            { imgUrl: '/Content/img/favors/Chcolate dipped Paximadia2.jpg' },
            //{ imgUrl: '/Content/img/favors/Chocolate dipped Paximadia.jpg' },
            //{ imgUrl: '/Content/img/favors/Chocolate dipped Paximadia3.jpg' },
            { imgUrl: '/Content/img/favors/Graduatin favor front only2.jpg' },
            { imgUrl: '/Content/img/favors/Graduation favor front only.jpg' },
            //{ imgUrl: '/Content/img/favors/Graduation favor showing chocolate covered baklava.jpg' },
            { imgUrl: '/Content/img/favors/Graduation favor with Kourambie.jpg' },
            { imgUrl: '/Content/img/favors/IMG_3770.jpg' },
            { imgUrl: '/Content/img/favors/WeddingAnniversaryfavor chocolate-covered baklava.jpg' },
            { imgUrl: '/Content/img/favors/White chocolat dipped paximadia.jpg' }
        ];
        var iter = utils.iter(favorImgs, $scope, 2000);
        $scope.img = iter.value;
    }
}());