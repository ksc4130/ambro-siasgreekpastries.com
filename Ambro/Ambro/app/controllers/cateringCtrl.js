(function () {
    'use strict';

    cateringCtrl.$inject = ['$scope', 'utils'];
    ambro.controller('cateringCtrl', cateringCtrl);
    function cateringCtrl($scope, utils) {

        var cateringImgs = [
            { imgUrl: '/Content/img/catering/Baklava 12x 18 tray.jpg' },//0
            { imgUrl: '/Content/img/catering/Baklava.jpg' },//1
            //{ imgUrl: '/Content/img/catering/Dessert table 3.JPG' },
            { imgUrl: '/Content/img/catering/Dessert table.JPG' },//2
            { imgUrl: '/Content/img/catering/Dessert table2.JPG' },//3
            { imgUrl: '/Content/img/catering/Diples.JPG' },//4
            { imgUrl: '/Content/img/catering/Galaktoboureko.JPG' },//5
            { imgUrl: '/Content/img/catering/IMG_3439.JPG' },//6
            { imgUrl: '/Content/img/catering/IMG_3441.JPG' },//7
            { imgUrl: '/Content/img/catering/Koulourakia.JPG' },//8
            { imgUrl: '/Content/img/catering/Kourambiedes in a tray.JPG' },//9
            { imgUrl: '/Content/img/catering/Kourambiedes unwrapped.JPG' },//10
            { imgUrl: '/Content/img/catering/Kourambiedes.jpg' },//11
           // { imgUrl: '/Content/img/catering/Melomakarona 16-in tray.jpg' },//12
            { imgUrl: '/Content/img/catering/Melomakarona not wrapped.jpg' }//,//13
            //{ imgUrl: '/Content/img/catering/Memomanarona .jpg' },
            //{ imgUrl: '/Content/img/catering/Paximadia Assorted.jpg' }//14
        ];

        $scope.img = utils.iter(cateringImgs, $scope, 1500);

        
        

        
    }
}());