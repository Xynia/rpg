app.service('service', ['$log', '$http', function($log, $http) {
    
    return {
    	login: function(password, login, next){
    		var data = {
    				login: login,
    				password: password
    		};
    		$http.post(url + '/login', data).then(function(res){
    			next(res.data.success, res.data.token);
    		});
    	},
	    traits: function(next) {
	        $http.get(url + '/traits').then(function(res){
    			next(res.data.success, res.data.traits);
    		});
	    },
	    attributs: function(next) {
	        $http.get(url + '/attributs').then(function(res){
    			next(res.data.success, res.data.attributs);
    		});
	    },
	    attributTypes: function(next) {
	        $http.get(url + '/attributtypes').then(function(res){
    			next(res.data.success, res.data.types);
    		});
	    }
    }
}]);