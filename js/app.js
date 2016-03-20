'use strict';

var myApp = angular.module ('myApp', [
    'ui.router',
    'myApp.browse'
]);

myApp.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams){

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
}]);

myApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');
});

angular.module('myApp.directives', []);
angular.module('myApp.services', []);



var app = angular.module("app", []);
var activeID = 100001;

app.controller("BooksListController", function($scope) {
    $scope.booksList = function(){
        var allBooks = $.extend([], DataModule.getBooks());
        return allBooks;
    };
});

app.controller("UsersController", function($scope){
    $scope.activeUser = function(){
        var oneUser = $.extend([], DataModule.getUsers(activeID)[0]);
        return oneUser;
    };
});