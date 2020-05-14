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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#current-city').change(function(){
    console.log($('#current-city').val())
    var city = $('#current-city').val();
    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    //   $('#current-temperature').text(data.main.temp)
    // })
    displayWeather(city)
  });

  // interface.js
  function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  });
  }

});
