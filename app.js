var blogApp = angular.module("blogApp", []);

blogApp.controller('title', function($scope){
  $scope.insertTitle = {};
  $scope.insertTitle.title = "AngularJS Blog Setup";
});

blogApp.controller('BlogPosts', function($scope, $http){
  $http.get('Posts.JSON').success(function(data){
     $scope.posts = {};
     $scope.posts = data;
     console.log($scope.posts);
   });
});

blogApp.controller('thisFullPost', function($scope,$http){
  //Prevent A link Default path.
  //Provide Template URL with link back to ALL POSTS
  $scope.this.addEventListener("click", function(){
    alert($scope.post);
  });

});
