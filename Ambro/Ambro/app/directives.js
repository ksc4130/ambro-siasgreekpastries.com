(function() {
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
}());