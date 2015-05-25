/**
 * Created by abhising on 25-05-2015.
 */

angular.module('todoApp.Controller', [])
    .controller('todoController', ["$scope", function($scope) {
        $scope.newTask = "";

        $scope.taskList = [
         {description : "task 1", done : false},
         {description : "task 2", done : false},
         {description : "task 3", done : false}
        ];

        $scope.addTodo = function() {
            $scope.taskList.push({description: $scope.newTask, done:false})
            $scope.newTask=""
        };

        $scope.deleteTodo = function(index) {
            $scope.taskList.splice(index,1);
        }
    }]);