
const myApp = angular.module("myList", []);

myApp.controller("myListController", function ($scope) {
    $scope.items = JSON.parse(localStorage.getItem("todoArray")) || ["AngularJs", "Reactjs", "TypeScript"];
    $scope.newItem = ""

    $scope.addItem = function () {
        $scope.items.push($scope.newItem);
        localStorage.setItem("todoArray", JSON.stringify($scope.items));
        $scope.newItem = ""
    }

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
        localStorage.setItem("todoArray", JSON.stringify($scope.items));
    }
});
