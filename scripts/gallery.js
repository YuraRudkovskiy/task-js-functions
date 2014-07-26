(function(){
	"use strict"

	window.gallery = function () {

	    return {
	    	/*0*/
	    	storage: null,
	    	readJsonStr: function(str){
				this.storage = JSON.parse(str, function(key, value){
					if(key === "date"){
						return new Date(value);
					}
					return value;
				});
		    },

		    getJsonStr: function(){
				return JSON.stringify(this.storage);
		    }
		    /*1*/

		    /*2*/

		    /*3*/

			/*4*/

		    /*5*/

		    /*6*/

	    };
	};

}());