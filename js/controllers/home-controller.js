MyApp.controller('homeController', function($scope, bookFactory, kartFactory) {

  $scope.books = bookFactory.getBooks();

  $scope.addToKart = function(book) {
    kartFactory.addToKart(book);
  };

});