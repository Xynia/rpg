app.service('service', ['$log', '$http', function($log, $http) {

    var url = "http://localhost:3003";
    
    return {
    	login: function(password, login, next){
    		var data = {
    				login: login,
    				password: password
    		};
    		$http.post(url + '/login', data).then(function(res){
    			next(res.data.success, res.data.token);
    		});
    	}
    }
}]);