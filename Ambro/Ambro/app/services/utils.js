(function () {
    'use strict';

    utils.$inject = ['$interval'];
    ambro.factory('utils', utils);
    function utils($interval) {
        var self = {};

        self.iter = function (arr, $scope, duration) {
            var curIndex = 0,
                len = arr.length - 1;

            duration = duration || 1000;

            var inter = $interval(function () {
                curIndex = (curIndex < len) ? (curIndex + 1) : 0;
            }, duration);

            if ($scope) {
                $scope.$on("$destroy", function () {
                    if (inter) {
                        $interval.cancel(timer);
                    }
                });
            }

            var val = function() {
                return arr[curIndex];
            };

            var ind = function() {
                return curIndex;
            };

            return {
                index: ind,
                value: val
            };
        };

        return self;
    }
}());