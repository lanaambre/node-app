(function() {
  'use strict';

  angular
    .module('example')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = [];

  /* @ngInject */
  function LayoutController() {
    var vm = this;

    vm.example = example;

    function example() {

    }
  }
})();
