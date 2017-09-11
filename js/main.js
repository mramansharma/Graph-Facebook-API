$(document).ready(function(){

	//Getting the userFeed
	function userFeed(){
		var url="https://graph.facebook.com/me?fields=posts,feed,name&access_token=";
		var token="EAACEdEose0cBAMOtNiDUksMmylv7CbUY0HifZBqJqs37QJ1QQH9CgWbJSo4iy0a3ZCNTXkhdK0ePyvicRGkZCKWkCZBmaOWmZATEgIGdyEAZClTYzsqpRkaJBQgMLWQjd6WPwhvMOQRyLbD7jojjsFGZAkpZCw5hw0bvL7TkdKZCvpl9yiNJsunXd5aecS1iF4ZB87jWbHFx21zQZDZD";
		var link=url+token;

		$.ajax(link,{
			success:function(response){
				var feed=response.posts.data;
				console.log(response);

				//userName Appended with the title
				$('#postsTitle').text(response.name+"\'s Posts");
				$('#userName').text(response.name);//userName Appended on the Navbar
			
				//Function to display the Feed
				function displayFeed(i,value){
					story=value.story;
					message=value.message;
					time=value.created_time;
					
					//To handle all the cases, and check the worst case conditions
					if(message==null || message=="undefined"){
						$('#feeds').append(
							$('<div>').addClass('container').attr("id","badge").html("<b>"+story+"</b>"+"<p>"+time+"</p>")	
						);
					}

					else if(story==null || story=="undefined"){
						$('#feeds').append(
							$('<div>').addClass('container').attr("id","badge").html("<p>"+message+"</p>"+"<p>"+time+"</p>")	
						);
					}

					else{
						$('#feeds').append(
							$('<div>').addClass('container').attr("id","badge").html("<b>"+story+"</b><br/>"+"<p>"+time+"</p>"+"<p>"+message+"</p>")	
						);
					}
				}

				jQuery.each(feed,displayFeed);//Call to iterate over the posts of the json object
			},

			//To display the Error Message
			error:function(request,errorType,errorMessage){
				alert(request);
				alert(errorType);
				alert(errorMessage);
			},

			timeout:5000, //Ideally 5 seconds
		});
	}
	$(document).load(userFeed());//calling the userFeed Function
});