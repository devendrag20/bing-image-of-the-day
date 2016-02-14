function getImages(uri){
	var request = require('request');
	var path = require('path');
	var fs = require('fs');

	request(uri, function(error,response,body){
		if(!error && response.statusCode == 200){
			console.log("Downloading...");
			
			var img_url = JSON.parse(body)['images'][0]['urlbase'];
			
			var name_arr = img_url.split('/'),
				name = name_arr[name_arr.length-1]+ '_1366x768.jpg',
				url = "http://az619519.vo.msecnd.net/files/"+name,
				img_name = path.basename('picture.jpg');
				request(url).pipe(fs.createWriteStream(img_name));
				console.log("Changing Wallpaper");
				console.log("Done!");
		}
	})
}

getImages("http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1&mkt=en-US");
