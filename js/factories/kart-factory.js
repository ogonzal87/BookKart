MyApp.factory('kartFactory', function() {
  var kart = [];

  return {
    getKart: function() {
      return kart;
    },
    addToKart: function(book) {
      kart.push(book);
    },
    buyBook: function(book) {
      alert('You have purchased: ' + book.name);
    },
  };

});