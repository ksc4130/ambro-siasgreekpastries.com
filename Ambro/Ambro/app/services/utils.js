(function () {
    'use strict';

    utils.$inject = ['$interval'];
    ambro.factory('utils', utils);
    function utils($interval) {
        var self = {};

        self.iter = function (arr, $scope, duration) {
            var curIndex = null,
                len = arr.length - 1;

            duration = duration || 1000;

            var inter = $interval(function () {
                curIndex = curIndex == null ? 0 : (curIndex < len) ? (curIndex + 1) : 0;
                console.log(curIndex);
            }, duration);

            if ($scope) {
                $scope.$on("$destroy", function () {
                    if (inter) {
                        $interval.cancel(timer);
                    }
                });
            }

            return function () {
                return arr[curIndex || 0];
            };
        };

        return self;
    }
}());