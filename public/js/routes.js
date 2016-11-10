
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider

	.state('login', {
		url : '/login',
		views : {

			'' : {
				templateUrl : 'views/mainView.html'
			},

			'menu@login' : {
				templateUrl : 'views/partials/partial-menu.html',
				controller : 'menuCtrl'
			},

			'contents@login' : {
				templateUrl : 'views/partials/partial-login.html',
				controller : 'loginCtrl'
			}
		}
	})
	
	.state('creation', {
		url : '/creation',
		views : {

			'' : {
				templateUrl : 'views/mainView.html'
			},

			'contents@creation' : {
				templateUrl : 'views/partials/partial-creation.html',
				controller : 'creationCtrl'
			},

			'menu@creation' : {
				templateUrl : 'views/partials/partial-menu.html',
				controller : 'menuCtrl'
			}
		}

	});
	
	$httpProvider.interceptors.push(['$q', '$log', '$window', function($q, $log, $window) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.serverToken) {
                	config.headers['x-access-token'] = $window.localStorage.serverToken;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    
                }
                return $q.reject(response);
            }
        };
    }]);



});