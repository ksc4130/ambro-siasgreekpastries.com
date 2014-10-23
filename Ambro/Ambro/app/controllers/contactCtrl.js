(function() {
    'use strict';

    contactCtrl.$inject = ['$scope', '$http'];
    ambro.controller('contactCtrl', contactCtrl);
    function contactCtrl($scope, $http) {
        $scope.con = {
            isSending: false,
            sent: false,
            error: false
        };

        $scope.contact = function (con) {
            con.isSending = true;
            console.log(con);
            $http.post('api/contact', con).then(function() {
                con.isSending = false;
                con.sent = true;
                con.error = false;
            }, function() {
                con.isSending = false;
                con.error = true;
                con.sent = false;
            });
        };
    }
}());