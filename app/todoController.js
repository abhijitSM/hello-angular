/**
 * Created by abhising on 25-05-2015.
 */

angular.module('todoApp.Controller', [])
    .controller('todoController', ["$scope", function($scope) {
        $scope.newTask = ""
    }]);