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
		    },
		    /*1*/
		    addImage: function(obj){
				if(!this.storage){
					this.storage = {
						images:[]
					}
				}
				this.storage.images.push(obj);
		    },

		    editImage: function(id, obj){
				if(this.storage && this.storage.images[id]){
					this.storage.images[id] = obj;
				}
		    },

		    deleteImage: function(id){
				if(this.storage && this.storage.images[id]){
					this.storage.images.splice(id, 1);
				}
		    },
		    /*2*/
		    overview: function (){
				var pre = document.createElement("pre");
				pre.innerText = JSON.stringify(this.storage,  function(key, value){
						if( !isNaN( parseInt(key) ) && value){
							value.id = parseInt(key);
						}
						return value;
					}, " ");
				return pre;
				/*
					если не извращаться, то просто console.log(this.storage);
				*/
		    },

		    view: function (id){
				var pre = document.createElement("pre");
				pre.innerText = JSON.stringify(this.storage.images[id], null, " ");
				return pre;
				/*
					console.log(this.storage.images[id]);
				*/
		    },
		    /*3*/
		    sort: function (field){
				if(this.storage){
					this.storage.images.sort(function(a, b){
						if(a[field] > b[field]){
							return 1;
						}else if(a[field] < b[field]){
							return -1;
						}
							return 0;
						});
				}
			}
			/*4*/

		    /*5*/

		    /*6*/

	    };
	};

}());