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

  $('.city-list').on('click', 'a[data-city]', function(event) {
    if (!confirm('Are you sure you want to delete this city?')) {
      return false;
    }

    var target = $(event.currentTarget);

    $.ajax({
      type: 'DELETE',
      url:  '/cities/' + target.data('city')
    })
    .done(function() {
      target.parents('li').remove();
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
    var content = '<a href="/cities/' + name + '">' + name + '</a> | ' +
                  '<a href="#" data-city="' + name + '">Delete</a>'

    return $('<li>', { html: content });
  }

});
