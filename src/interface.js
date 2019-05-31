$(document).ready(function() {
   var thermostat = new Thermostat();

   refreshTemperature();
   refreshPowerSavingMode();

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

    function refreshTemperature() {
      $("#temperature").text(thermostat.getTemperature() + " °C");
      $('#temperature').attr('class', thermostat.getCurrentEnergyUsage());
    }

    function refreshPowerSavingMode() {
      $("#psm-status").text(thermostat.isPowerSavingModeOn() ? "ON" : "OFF");
    }
});