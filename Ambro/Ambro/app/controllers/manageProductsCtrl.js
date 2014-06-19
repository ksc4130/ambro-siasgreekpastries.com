(function() {
    'use strict';

    manageProductsCtrl.$inject = ['$scope', '$timeout', 'productSrv', 'packageSrv', 'categories', 'products', 'packages', '$upload'];
    ambro.controller('manageProductsCtrl', manageProductsCtrl);

    function manageProductsCtrl($scope, $timeout, productSrv, packageSrv, categories, products, packages, $upload) {
        $scope.product = productSrv.create();
        $scope.package = packageSrv.create();
        
        $scope.categories = categories;
        $scope.products = products;

        $scope.imgUrl = null;
        $scope.imgFile = null;

        $scope.onFileSelect = function ($files) {
            console.log('files', $files);
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var $file = $files[i];
                $scope.imgFile = $file;
                if (window.FileReader && $file.type.indexOf('image') > -1) {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL($files[i]);
                    var loadFile = function (fileReader, index) {
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                $scope.imgUrl = e.target.result;
                            });
                        }
                    }(fileReader, i);
                }

            }
            /* alternative way of uploading, send the file binary with the file's content-type.
               Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
               It could also be used to monitor the progress of a normal http post/put request with large data*/
            // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
        };

        $scope.submitProduct = function (product) {
            product.$save();
            $scope.product = {};
        };

        $scope.submitPackage = function (newPackage) {
            $scope.upload = $upload.upload({
                url: '/api/packages',
                method: 'POST',
                data: { newPackage: JSON.stringify(newPackage) },
                file: $scope.imgFile, 
            }).progress(function (evt) {
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function (data, status, headers, config) {
                // file is uploaded successfully
                console.log('success', data);
                $scope.package = {};
            });
            
            //newPackage.$save();
        };
    }
}());