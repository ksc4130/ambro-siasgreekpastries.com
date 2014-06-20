(function () {
    'use strict';

    ambro.directive('dots', dots);
    function dots() {
        return {
            replace: true,
            restrict: 'E',
            template: '<span title="{{value}}" ng-if="show"> ...</span>',
            scope: {
                limit: '=',
                value: '='
            },
            link: function (scope, el, attrs) {
                scope.show = scope.value && (!scope.limit || scope.value.length > scope.limit);
            }
        }

    }

    slider.$inject = ['$interval'];
    ambro.directive('slider', slider);
    function slider($interval) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/app/tmpls/sliderDrc.html',
            scope: {
                imgs: '=',
                interval: '@'
            },
            link: function (scope, el, attrs) {
                scope.imgs.forEach(function(item) {
                    item.sliderClass = 'am-fade';//'am-slide-right';
                });

                scope.disImgs = [];
                scope.disImgs.push(scope.imgs[0]);
                //scope.disImgs[0].sliderClass = 'am-slide-left';
                scope.interval = scope.interval || 1500;

                var curIndex = 0;
                var stop = $interval(function () {
                    curIndex += 1;

                    if (curIndex > (scope.imgs.length - 1)) {
                        curIndex = 0;
                    }

                    console.log('cur index', curIndex, scope.imgs[curIndex].sliderClass);

                   // scope.disImgs[0].sliderClass = 'am-slide-right';
                    scope.disImgs = [];
                    scope.disImgs.push(scope.imgs[curIndex]);
                    //scope.disImgs[0].sliderClass = 'am-slide-left';
                }, scope.interval);
            }
        }
    }
}());