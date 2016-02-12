'use strict';

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