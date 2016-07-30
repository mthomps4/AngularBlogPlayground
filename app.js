// https://codepen.io/nickmoreton/pen/mgtLK

var blogApp = angular.module("blogApp", ['ngRoute']);

blogApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '_blog.html',
    controller: 'BlogPosts'
  })
  .when('/blog', {
    templateUrl: '_blog.html',
    controller: 'BlogPosts'
  })
  .when('/post', {
    templateUrl: '_post.html',
    controller: 'postPages'
  })
  .otherwise({redirectTo: '/'});
});

blogApp.controller('title', function($scope){
  $scope.insertTitle = {};
  $scope.insertTitle.title = "AngularJS Blog Setup";
});


blogApp.controller('BlogPosts',['$scope', '$location', 'SelectedPost', function($scope, $location, SelectedPost){
    //  $scope.posts = {};
    //  $scope.posts = data;
    //  console.log($scope.posts);

    console.log('enter');
    $scope.posts = SelectedPost.getPostList();
    console.log('yup');
    console.log($scope.posts);

     $scope.selectPost = function(post){
        SelectedPost.setPost(post);
        $location.path('/post');
     };
}]);

blogApp.controller('postPages', ['$scope', 'SelectedPost', function($scope, SelectedPost){
  $scope.post = SelectedPost.getPost();
}]);

blogApp.service('getPosts', function($http){
 return  $http.get('Posts.json')
  .then(function(response) {
    if (typeof response.data === 'object') {
        return response.data;
    }
  })
  .then(function(successResponse){
      console.log(successResponse);
  });
  return successResponse;

});

blogApp.service('SelectedPost', function(getPosts, $rootScope){

        var list = {};

        list.value = getPosts;


        var post;

        this.getPostList = function(){
          console.log('getPostList');
          console.log(list.value);
          return angular.copy(list);
        };

        this.getPost = function() {
          console.log('getPost');
          return post;
        }

        this.setPost = function(p){
          console.log('setPost');
          post = p;
        };

});
