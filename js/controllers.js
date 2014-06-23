'use strict';

/* Controllers */
var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('myAppCtrl', ['$scope', function($scope){
  $scope.text = "";
  $scope.oldText = ""; //Placeholder in edit form
  $scope.newText = "";

  var i = 0;
  $scope.tasks = [];
  
  $scope.addTodo = function() {
    $scope.tasks.push({"title": $scope.text, "done":false});
    $scope.text = "";
  };

  $scope.removeTodo = function(todo) {
		$scope.tasks.splice($scope.tasks.indexOf(todo), 1);
  };

  $scope.editTodo = function(todo) {
    $scope.oldText = todo;
    i = $scope.tasks.indexOf(todo);
  };

  $scope.saveTodo = function() {
   $scope.tasks[i] = {"title":$scope.newText, "done": false}
   $scope.newText = "";
  }
}]);
