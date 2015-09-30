MyApp.factory('bookFactory', function() {

  var books = [{
    "id": 1,
    "name": "Bobby Simpson",
    "price": "Koruna"
  }, {
    "id": 2,
    "name": "Lori Murphy",
    "price": "Dollar"
  }, {
    "id": 3,
    "name": "Phillip Peters",
    "price": "Rupiah"
  }, {
    "id": 4,
    "name": "Carl Rogers",
    "price": "Peso"
  }, {
    "id": 5,
    "name": "Carlos Walker",
    "price": "Real"
  }, {
    "id": 6,
    "name": "Carolyn Gonzalez",
    "price": "Krona"
  }, {
    "id": 7,
    "name": "Norma Lawson",
    "price": "Euro"
  }];


  return {
    getBooks: function() {
      return books;
    }
  };
});