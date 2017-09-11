$(document).ready(function(){

	//Show userProfile information
	function profileInformation(){
		
		var url="https://graph.facebook.com/me?fields=name,birthday,email,friends,hometown,picture.width(300).height(300)&access_token=";
		var token="EAACEdEose0cBAMOtNiDUksMmylv7CbUY0HifZBqJqs37QJ1QQH9CgWbJSo4iy0a3ZCNTXkhdK0ePyvicRGkZCKWkCZBmaOWmZATEgIGdyEAZClTYzsqpRkaJBQgMLWQjd6WPwhvMOQRyLbD7jojjsFGZAkpZCw5hw0bvL7TkdKZCvpl9yiNJsunXd5aecS1iF4ZB87jWbHFx21zQZDZD";
		var link=url+token;
		
		$.ajax(link,{
			success:function(response){
				console.log(response);
				$('#name').text(response.name);
				$('#email').text(response.email);
				$('#birthday').text(response.birthday);
				$('#hometown').text(response.hometown.name);
				$('#friends').text(response.friends.summary.total_count);
				$('#profileTitle').text(response.name+"\'s Profile");//userName Appended with the title
				$('#userName').text(response.name);//userName Appended on the Navbar
				$('#profileImage').attr('src',response.picture.data.url);
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

	$(document).load(profileInformation());//calling the profileInformation Function
});