
const myApp = angular.module("myList", []);

myApp.controller("myListController", function ($scope) {
    $scope.items = ["AngularJs", "Reactjs", "TypeScript"];
    $scope.newItem = ""

    $scope.addItem = function () {
        $scope.items.push($scope.newItem)
        $scope.newItem = ""
    }

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    }
});
