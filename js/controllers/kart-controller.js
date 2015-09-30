MyApp.controller('kartController', function($scope, kartFactory) {

  $scope.kart = kartFactory.getKart();

  $scope.buyBook = function(book) {
    kartFactory.buyBook(book);
  };

});