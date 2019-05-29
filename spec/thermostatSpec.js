'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Defaults', function() {
    it('has a default temperature of 20', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });

    it('is in power saving mode by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
    });
  });

  describe('#up', function() {
    it('increases a temperature by 1', function() {
      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('#down', function() {
    it('decreases a temperature by 1', function() {
      thermostat.down();

      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

});
