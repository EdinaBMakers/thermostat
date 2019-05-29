'use strict';

function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingModeOn = true;
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._isPowerSavingModeOn;
};
