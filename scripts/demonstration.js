(function(){
	"use strict"

	var PicGallery = gallery(),
		PicGallery2 = gallery(),
		content = document.getElementById("content"),
		jsonStr = "{\
						\"images\": [\
							{\
								\"name\": \"cat\",\
								\"path\": \"images/cat.png\",\
								\"description\": \"The best cat ever\",\
								\"date\": \"2014-07-21T09:05:34.540Z\"\
							},\
							{\
								\"name\": \"dog\",\
								\"path\": \"images/dog.png\",\
								\"description\": \"The best dof ever\",\
								\"date\": \"2014-07-21T09:06:05.544Z\"\
							},\
							{\
								\"name\": \"giraffe\",\
								\"path\": \"images/giraffe.png\",\
								\"description\": \"1\",\
								\"date\": \"2014-07-21T09:07:24.187Z\"\
							},\
							{\
								\"name\": \"dinosaur\",\
								\"path\": \"images/dinosaur.png\",\
								\"description\": \"The best dinosaur ever\",\
								\"date\": \"2014-07-21T09:07:47.683Z\"\
							}\
						]\
					}",
		jsonStr2 = "{\
						\"images\": [\
							{\
								\"name\": \"dinosaur\",\
								\"path\": \"images/dinosaur.png\",\
								\"description\": \"The best dinosaur ever\",\
								\"date\": \"2014-07-21T09:07:47.683Z\"\
							}\
						]\
					}";

	//console.log(PicGallery);

	PicGallery.readJsonStr(jsonStr);
	PicGallery2.readJsonStr(jsonStr2);

	/*
	PicGallery.addImage({
							name:"w",
							path:"",
							description:"d",
							date:new Date()
						});
	
	*/


	//PicGallery.deleteImage(3);
	/*
	PicGallery.editImage(1, {
							name:"1",
							path:"d",
							description:"d",
							date:new Date()
						});
	*/
	//content.appendChild(PicGallery.overview());
	//content.appendChild(PicGallery.view(2));

	//PicGallery.sort("description");

	//PicGallery.filter("name", "giraffe");

	//content.appendChild(PicGallery.overview());
	//console.log(PicGallery.getJsonByName());
	//console.log(PicGallery.getJsonByPath());
	//console.log(PicGallery.verification());
	console.log(PicGallery.getJsonStr());
	console.log("------------------------");
	console.log(PicGallery2.getJsonStr());
	console.log("******************change context**************************");
	console.log(PicGallery.getJsonStr.call(PicGallery2));
	console.log("------------------------");
	console.log(PicGallery2.getJsonStr.call(PicGallery));
})();