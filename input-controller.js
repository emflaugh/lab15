var app = angular.module('madLibs');

app.controller('inputCtrl', function($scope, wordInput, $location) {
  $scope.addWords = function(madLib){
  // console.log(madLib);

  wordInput.setWord(madLib);

  $location.path('/display');

};

});
