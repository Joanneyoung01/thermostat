//document is read
$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  console.log(thermostat.temperature)

  //change temperature
  $('#temperature-up').on('click',function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#power-saving-mode-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text("off");
  });

  $('#power-saving-mode-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text("on");
  });

  


});