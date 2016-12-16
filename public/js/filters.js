app.filter('attributeFilter',function($log) {
	return function(attributes, type, subType, category) {
		var filtered = [];
		if (attributes != null) {
			
			for (var i = 0; i < attributes.length; i++) {
				var att = attributes[i];
				
				if (type){
					if(subType){
						if(category){
							if(att.category == category)
								filtered.push(att);
						}else{
							if(att.subType == subType)
								filtered.push(att);
						}
					}else{
						if(att.type == type)
							filtered.push(att);
					}
				}
			}
		}
		return filtered;
	};
});