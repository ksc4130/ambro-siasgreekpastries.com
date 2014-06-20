(function() {
    'use strict';

    homeCtrl.$inject = ['$scope'];
    ambro.controller('homeCtrl', homeCtrl);
    function homeCtrl($scope) {
        $scope.myInterval = 5000;

        $scope.imgs = [
            { title: 'One', imgUrl: 'http://owlgraphic.com/owlcarousel/demos/assets/fullimage1.jpg' },
            { title: 'Two', imgUrl: 'http://owlgraphic.com/owlcarousel/demos/assets/fullimage2.jpg' }
        ];

        var slides = $scope.slides = [];
        $scope.addSlide = function () {
            var newWidth = 600 + slides.length;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
                  ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
    }
}());