//document is read
$(document).ready(function() {

  var thermostat = new Thermostat();

  updateTemperature()
  // console.log(thermostat.temperature)

  //change temperature
  $('#temperature-up').on('click',function(){
    thermostat.up();
    updateTemperature()
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature()
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature()
  });

  $('#power-saving-mode-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text("off");
    updateTemperature()
  });

  $('#power-saving-mode-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text("on");
    updateTemperature()
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };



});
