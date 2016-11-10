app.controller('creationCtrl', function ($scope, $log, $state, $window, service) {
	

	// If a token exists, redirec
    if(!$window.localStorage.rpgToken){
        $state.transitionTo('login');
    }
	

});
