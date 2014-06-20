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
            return $resource(apiUrlBase + url + '/:action?', {}, extMethods);
        }

        var self = {};

        self.product = createApi('products', {
            getCategories: { method: 'GET', isArray: true, params: { action: 'getCategories' } }
            , getProducts: { method: 'GET', isArray: true, params: { action: 'getProducts' } }
            
        });

        self.package = createApi('packages', {
            getPastries: { method: 'GET', isArray: true, params: { action: 'getPastries' } }
            , getCookies: { method: 'GET', isArray: true, params: { action: 'getCookies' } }
        });

        return self;
    }
}());