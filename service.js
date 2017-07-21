var app = angular.module('madLibs');

app.factory('wordInput', function(){

  var words = {};

  function setWord(madLib){
    words = madLib;
    console.log(words);
  };
  function returnWord() {
    return words;
  };

    return {
      setWord: setWord,
      returnWord: returnWord
    }

});
