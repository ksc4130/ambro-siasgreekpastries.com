(function() {
    'use strict';

    ambro.constant('apiUrlBase', '/api/');
    ambro.factory('apiSrv', apiSrv);
    apiSrv.$inject = ['$resource', 'apiUrlBase'];
    function apiSrv($resource, apiUrlBase) {
        function createApi(url, extMethods) {
            if (!url || !url.length) {
                console.error('must provider url to create api');
                return null;
            }

            url = url[0] === '/' ? url.splice(0, 1) : url;
            return $resource(apiUrlBase + url, {}, extMethods);
        }

        var self = {};

        self.products = createApi('products');

        return self;
    }
}());