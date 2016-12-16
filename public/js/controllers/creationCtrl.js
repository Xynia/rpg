app.controller('creationCtrl', function ($scope, $log, $state, $window, service) {
	

	// If a token exists, redirec
    if(!$window.localStorage.rpgToken){
        $state.transitionTo('login');
    }
	
    $scope.points = 6;
    
    $scope.perso = {
    		name: "",
    		age: 20,
    		gender: ""
    };
    
    $scope.formatedTraits = [];
    
    $scope.opposing = [];
    
    service.traits(function(success, data){
    	if(success){
	    	$scope.traits = data;
	    	var len = data.length;
	    	var k = -1;
	    	for(var i = 0; i < len; ++i){
	
	    		$scope.traits[i].id = i;
	    		$scope.traits[i].checked = false;
	    		$scope.traits[i].disabled = false;
	    		
	    		if((i % 4) == 0){
	    			
	    			$scope.formatedTraits.push([i]);
	    			k++;
	    		}else{
	    			$scope.formatedTraits[k].push(i);
	    		}
	    	}  
    	}
    });

	service.attributTypes(function(success,data)){
		if(success){
			$scope.attributTypes = data;
		}    	
	});

    service.attributs(function(success,data)){
    	if(success){
    		$scope.attributs = data;
    	}    	
    });

    
    $scope.change = function(id) {
    	var len = $scope.traits.length;
    	if($scope.traits[id].checked){
			$scope.points= $scope.points + $scope.traits[id].value;   		
		}else{
			$scope.points= $scope.points - $scope.traits[id].value;			
		}
    	$scope.opposing = [];
    	for(var i = 0; i < len; i++){
    		if($scope.traits[i].checked){
    			$scope.opposing = $scope.opposing.concat($scope.traits[i].opposing);
    		}
    	}
    	for(var i = 0; i < len; i++){
			if($scope.opposing.indexOf($scope.traits[i].name) > -1){
				$scope.traits[i].disabled = true;
			}else{
				$scope.traits[i].disabled = false;
			}
		}
    };
    
    $scope.style= function(val) {
    	if(val > 0){
    		return {'color': '#d50000'};
    	}else{
    		return {'color': '#1b5e20'};
    	}
    };

});
