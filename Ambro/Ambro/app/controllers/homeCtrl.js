﻿(function () {
    'use strict';

    homeCtrl.$inject = ['$scope', 'packages', '$interval', 'utils'];
    ambro.controller('homeCtrl', homeCtrl);
    function homeCtrl($scope, packages, $interval, utils) {
        $scope.imgs = packages.map(function (item) { //.splice(0, 5)
            return {
                title: item.product.productName,
                imgUrl: item.imgUrl,
                href: '#/product/' + item.id,
                isActive: false,
                transStyle: {},
                getTransStyle: function () {
                    var i = $scope.imgs.indexOf(this),
                        calc = (i * -500);
                    return {
                        transform: 'translateX(' + (i === 0 ? 0 : calc) + 'px)'
                    }
                },
                style: {
                    left: '500px'
                }
                //, description: item.product.productDescription
            };
        });

        $scope.slideImgs = [packages[0]];

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
//        var transWidth = $scope.imgs.length * 500;
//        $scope.transStyle = {
//            width: transWidth + 'px'
//        };
//
//        var last = null,
//            current = null,
//            curIndex = 0,
//            total = $scope.imgs.length,
//            slideImgsFull = false;
//
//        $scope.imgOne = { style: { left: '500px' } };
//
//        $scope.imgTwo = {
//            style: {left: '0px'},
//            imgUrl: $scope.imgs[curIndex].imgUrl
//        };
//        $scope.imgThree = {
//            style: { left: '500px' },
//            imgUrl: $scope.imgs[curIndex + 1].imgUrl
//        };
//
//        var prev = $scope.imgOne,
//            cur = $scope.imgTwo,
//            next = $scope.imgThree;
//
//        $interval(function () {
//
//            if (last) {
//                last.isActive = false;
//                // last.transStyle = {};
//            }
//
//            curIndex += 1;
//            if (curIndex >= total) {
//                curIndex = 0;
//                slideImgsFull = true;
//
//            } else if (!slideImgsFull) {
//                $scope.slideImgs.push($scope.imgs[curIndex]);
//            }
//
//            last = current;
//            current = $scope.imgs[curIndex];
//            current.active = true;
//            //current.transStyle = current.getTransStyle();
//            //$scope.transStyle = current.getTransStyle();
//            $scope.transStyle = {
//                transform: 'translateX(' + (curIndex * -250) + 'px)',
//                width: transWidth + 'px'
//            };
//            console.log('change', current.getTransStyle());
//
//            prev.imgUrl = curIndex === total ? $scope.imgs[0].imgUrl : $scope.imgs[curIndex + 1].imgUrl;
//
//            prev.style.opacity = 0;
//            prev.style.left = '250px';
//
//            next.style.opacity = 1;
//            cur.style.left = '-250px';
//            next.style.left = '0px';
//
//            var lastPrev = prev;
//            prev = cur;
//            cur = next;
//            next = lastPrev;
//        }, 3000);


        //            [
        //            { title: 'Baklava', imgUrl: '/Content/img/slider/img_0896.jpg', description: '' },
        //            { title: 'Melomakarona', imgUrl: '/Content/img/slider/img_0942.jpg', description: '' },
        //            { title: 'Paximadakia', imgUrl: '/Content/img/slider/img_0950.jpg', description: '' },
        //            { title: 'Kourambiedes', imgUrl: '/Content/img/slider/img_0907.jpg', description: '' },
        //            { title: 'Assorted Box', imgUrl: '/Content/img/slider/img_0920two.jpg', description: '' }
        //        ];
    }
}());