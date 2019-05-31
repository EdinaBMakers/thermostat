$(document).ready(function() {
   var thermostat = new Thermostat();

   refreshTemperature();
   refreshPowerSavingMode();

   // Register event handler functions
   $("#temperature-up").on('click', function() {
      thermostat.up();
      refreshTemperature();
    });

    $("#temperature-down").on('click', function() {
      thermostat.down();
      refreshTemperature();
    });

    $("#temperature-reset").on('click', function() {
      thermostat.reset();
      refreshTemperature();
    });

    $("#psm-toggle").on('click', function() {
      thermostat.togglePowerSavingMode();
      refreshPowerSavingMode();
    });

    $("#cities").on('change', function() {
      var selectedCity = $(this).find("option:selected").text();
      var selectedCityWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

      $.get(selectedCityWeatherUrl, function(data) {
         $("#temp-outside").text(data.main.temp);
       });
    });

    $("#cities").val("London").change();

    function refreshTemperature() {
      $("#temperature").text(thermostat.getTemperature() + " °C");
      $('#temperature').attr('class', thermostat.getCurrentEnergyUsage());
    }

    function refreshPowerSavingMode() {
      $("#psm-status").text(thermostat.isPowerSavingModeOn() ? "ON" : "OFF");
    }
});