var app = angular.module('madLibs');

app.controller('outputCtrl', function($scope, wordInput) {

    $scope.madLibsObject = wordInput.returnWord();
    console.log($scope.madLibsObject);

//closure for input-controller
});
