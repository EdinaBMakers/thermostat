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
    it('increases the temperature by 1', function() {
      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('cannot increase temperature above 25 in power saving mode',
       function() {
      setTemperatureTo(thermostat, 25);

      expect(thermostat.getTemperature()).toEqual(25);

      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(25);
    });

    it('cannot increase temperature above 32 if power saving mode is off',
       function() {
      thermostat.togglePowerSavingMode()
      setTemperatureTo(thermostat, 32);

      expect(thermostat.getTemperature()).toEqual(32);

      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('#down', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down();

      expect(thermostat.getTemperature()).toEqual(19);
    });

    it('cannot decrease the temperature below 10', function() {
      setTemperatureTo(thermostat, 10);

      expect(thermostat.getTemperature()).toEqual(10);

      thermostat.down();

      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe('#reset', function() {
    it('resets the temperature to 20', function() {
      setTemperatureTo(thermostat, 25);
      thermostat.reset();

      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

});
