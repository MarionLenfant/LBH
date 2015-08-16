// Ionic Starter App

angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {



  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'search.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'settings.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "facts2.html"
        }
      }
    })
	
	.state('tabs.oneOrAnother', {
      url: "/oneOrAnother",
      views: {
        'home-tab': {
          templateUrl: "templates/oneOrAnother.html",
		  controller: 'oneOrAnotherCtrl'
        }
      }
    })
	
    .state('tabs.crush', {
      url: "/crush",
      views: {
        'crush-tab': {
          templateUrl: "templates/crush.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'crush-tab': {
          templateUrl: "nav-stack.html"
        }
      }
    })
    .state('tabs.random', {
      url: "/random",
      views: {
        'random-tab': {
          templateUrl: "templates/random.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

.controller('oneOrAnotherCtrl', function($scope) {
 
})

.controller('HomeTabCtrl', function($scope) {
});