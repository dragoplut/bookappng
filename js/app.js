'use strict';

var app = angular.module("app", []);
app.controller("BooksListController", function($scope) {
    $scope.booksList = function(){
        var allBooks = $.extend([], DataModule.getBooks());
        return allBooks;
    };
});