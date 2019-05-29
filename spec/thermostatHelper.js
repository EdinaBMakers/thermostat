function setTemperatureTo(thermostat, temperature) {
  var currentTemperature = thermostat.getTemperature();

  if (currentTemperature === temperature) {
    return;
  }

  var tempDiff = Math.abs(currentTemperature - temperature);

  for (var i = 0; i < tempDiff; i++) {
    if (currentTemperature > temperature) {
      thermostat.down();
    } else {
      thermostat.up();
    }
  }
};
