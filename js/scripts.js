$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var firstNameInput = $('input#firstName').val();
    var lastNameInput = $('input#lastName').val();
    var addressInput = $('input#address').val();

    $('.firstName').text(firstNameInput);
    $('.lastName').text(lastNameInput);
    $('.address').text(addressInput);

    $('#receipt').show();

    event.preventDefault();
  });
});
