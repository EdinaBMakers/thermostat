'use strict';

function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingModeOn = true;
  this._MIN_TEMP = 10;
  this._MAX_TEMP_IN_PSM = 25;
  this._MAX_TEMP = 32;
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._isPowerSavingModeOn;
};

Thermostat.prototype.up = function() {
  var maxTemp = this._isPowerSavingModeOn
    ? this._MAX_TEMP_IN_PSM
    : this._MAX_TEMP = 32;

  if (this._temperature < maxTemp) {
    this._temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this._temperature > this._MIN_TEMP) {
    this._temperature -= 1;
  }
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this._isPowerSavingModeOn = !this._isPowerSavingModeOn;
};
