'use strict';

/**
 * @ngdoc function
 * @name gapFront.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the gapFront
 */
angular.module('gapFront')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });