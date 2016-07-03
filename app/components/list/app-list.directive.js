'use strict';

angular.module('myApp.list.app-list.directive', [])
.directive('appList', appList);

function appList(){
  var directive = {
    restrict: 'E',
    controller: ListCtrl,
    controllerAs: 'listCtrl',
    templateUrl: 'components/list/app-list.html'
  };

  return directive;
}

ListCtrl.$inject = ['listService'];

function ListCtrl(listService) {
  var listCtrl = this
  listCtrl.itemList = listService;
}
