// https://codepen.io/nickmoreton/pen/mgtLK

var blogApp = angular.module("blogApp", []);

blogApp.controller('title', function($scope){
  $scope.insertTitle = {};
  $scope.insertTitle.title = "AngularJS Blog Setup";
});

blogApp.controller('BlogPosts', function($scope, $http){
  $http.get('Posts.json').success(function(data){

     $scope.posts = {};
     $scope.posts = data;
     console.log($scope.posts);
   });
});
