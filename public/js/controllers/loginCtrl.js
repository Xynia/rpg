app.controller('loginCtrl', function ($scope, $log, $state, $window, service) {
	

	// If a token exists, redirec
    if($window.localStorage.rpgToken){
        $state.transitionTo('creation');
    }
	
	$scope.user = {
			login: "",
			password : ""
	};
	
	
	$scope.login = function(){
		if($scope.user.login != '' && $scope.user.password != ''){
			// Find the user in the DB, once found access dashboard
			service.login($scope.user.password, $scope.user.login, function(success, token){
				if(success){
					$window.localStorage.rpgToken = token;
					$window.localStorage.userName = $scope.user.login;
					$state.transitionTo('creation');
				}				
			});
		}
	};

});