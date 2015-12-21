'use strict';

angular.module('f1Tracker.version', [
  'f1Tracker.version.interpolate-filter',
  'f1Tracker.version.version-directive'
])

.value('version', '0.1');
