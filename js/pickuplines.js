var pickuplines = [];

window.onload = function () {
	
	var textbox = document.querySelector('.contents');
    var currentIndex = 0;
    var box = document.querySelector('#textbox');
	
    // TODO:: Do your initialization job
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	loadLines(function() {
		box.innerHTML = pickuplines[currentIndex].tweet;
	});
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
		window.location.href = 'index.html';
	    //tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    
    textbox.addEventListener("click", function(){
    	console.log(pickuplines[currentIndex]);
    	currentIndex = (currentIndex + 1) % pickuplines.length;
    	var str = pickuplines[currentIndex].tweet;
    	if (str.length > 100) {
    		box.style.fontSize = "1.7em";
    	} else {
    		box.style.fontSize = "2.0em";
    	}
    	box.innerHTML = str;
    	if (currentIndex >= pickuplines.length - 1) {
    		loadLines();
    	}
    });
};

function loadLines(callback) {
	axios.get('http://pebble-pickup.herokuapp.com/tweets').then((response) => {
		pickuplines = response.data;
		callback();
		console.log(pickuplines);
	});
}
