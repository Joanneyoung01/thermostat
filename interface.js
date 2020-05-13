//document is read
$(document).ready(function() {

  // new thermostat object
  var thermostat = new Thermostat();

  //on click change the
  $('#temperature').text(thermostat.temperature);
  console.log(thermostat.temperature)

  //change temperature
  $('#temperature-up').on('click',function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

});