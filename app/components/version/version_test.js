'use strict';

describe('f1Tracker.version module', function() {
  beforeEach(module('f1Tracker.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
