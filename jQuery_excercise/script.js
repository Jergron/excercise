$(document).ready(function() {

  $.ajax({
    url:"response.txt"
  }).done(function(data) {
    console.log(data)
    document.write(data)
  }) 

});