$(function(){

  $.get('/cities', appendCitiesToList);

  $('form').on('submit', function(event) {
    event.preventDefault();
    var formData = $(this).serialize();

    $.post('/cities', formData)
      .done(function(data) {
        $('.city-list').append(cityListElement(data));
      });
  });

  function appendCitiesToList(cities) {
    var list = [];

    for(var city in cities) {
      list.push(cityListElement(city));
    }
    $('.city-list').append(list);
  }

  function cityListElement(name) {
    return $('<li>', { text: name });
  }

});
