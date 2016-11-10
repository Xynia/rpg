app.controller('menuCtrl', function ($scope, $log, $state, $window) {
	
    if(!$window.localStorage.rpgToken){
    	$scope.loggedIn = false;
    	$scope.userName = "";
    }else{
    	$scope.loggedIn = true;
    	$scope.userName = $window.localStorage.userName;
    }
    
    $scope.logOut = function (){
    	delete $window.localStorage.rpgToken;
    	delete $window.localStorage.userName;
    	$state.transitionTo('login');
    };
    
});