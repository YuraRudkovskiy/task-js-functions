(function(){
	"use strict"

	var picGallery = gallery(),
		picGallery2 = gallery(),
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

	//console.log(picGallery);

	picGallery.readJsonStr(jsonStr);
	picGallery2.readJsonStr(jsonStr2);

})();