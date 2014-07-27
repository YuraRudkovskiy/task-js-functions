(function(){
	"use strict"

	window.gallery = function () {
		var Gallery = {};
	    
	    /*0*/
	    Gallery.Storage = null;
	    Gallery.readJsonStr = function(str){
			this.Storage = JSON.parse(str, function(key, value){
				if(key === "date"){
					return new Date(value);
				}
				return value;
			});
		};

		Gallery.getJsonStr = function(){
			return JSON.stringify(this.Storage);
		};
		/*1*/
		Gallery.addImage = function(obj){
			if(!this.Storage){
				this.Storage = {
					images:[]
				}
			}
			this.Storage.images.push(obj);
		};

		Gallery.editImage = function(id, obj){
			if(this.Storage && this.Storage.images[id]){
				this.Storage.images[id] = obj;
			}
		};

		Gallery.deleteImage = function(id){
			if(this.Storage && this.Storage.images[id]){
				this.Storage.images.splice(id, 1);
			}
		};
		/*2*/
		Gallery.overview = function (){
			var pre = document.createElement("pre");
			pre.innerText = JSON.stringify(this.Storage,  function(key, value){
					if( !isNaN( parseInt(key) ) && value){
						value.id = parseInt(key);
					}
					return value;
				}, " ");
			return pre;
			/*
				console.log(this.Storage);
			*/
		};

		Gallery.view = function (id){
			var pre = document.createElement("pre");
			pre.innerText = JSON.stringify(this.Storage.images[id], null, " ");
			return pre;
			/*
				console.log(this.Storage.images[id]);
			*/
		};
		/*3*/
		Gallery.sort = function (field){
			if(this.Storage){
				this.Storage.images.sort(function(a, b){
					if(a[field] > b[field]){
						return 1;
					}else if(a[field] < b[field]){
						return -1;
					}
					return 0;
				});
			}
		};
		/*4*/
		Gallery.filter = function(field, value){
			this.Storage.images = this.Storage.images.filter(function(element){
				return element[field] === value;
			});
		};
		/*5*/
		Gallery.getJsonByName = function(){
			this.Storage.images.forEach(function(element){
				element.toJSON = function() {
					return this.name;
				};
			});
			return JSON.stringify(this.Storage);
		};
		Gallery.getJsonByPath = function (){
			this.Storage.images.forEach(function(element){
				element.toJSON = function() {
					if(this.path !== ""){
						return this;
					}
				};
			});
			return JSON.stringify(this.Storage);
		};
		/*6*/
		Gallery.verification = function (){
			return this.Storage.images.every(function(element){
				return element.description !== "";
			});
		};

		return Gallery;
	};

}());