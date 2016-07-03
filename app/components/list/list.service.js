'use strict';

angular.module('myApp.list.list.service', [])
.service('listService', listService);

function listService(){
  return {itemOne: 'dog',
itemTwo: 'cat',
itemThree: 'snake',
itemFour: 'turtle'}
}
