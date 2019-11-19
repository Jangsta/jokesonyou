var jokes = [];

window.onload = function () {
    // TODO:: Do your initialization job
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	loadJokes();
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    var textbox = document.querySelector('.contents');
    var currentIndex = 0;
    var box = document.querySelector('#textbox');
    textbox.addEventListener("click", function(){
    	currentIndex = (currentIndex + 1) % jokes.length;
    	var str = jokes[currentIndex].setup + ' ' + jokes[currentIndex].punchline;
    	if (str.length > 100) {
    		box.style.fontSize = "1.7em";
    	} else {
    		box.style.fontSize = "2.0em";
    	}
    	box.innerHTML = jokes[currentIndex].setup + ' ' + jokes[currentIndex].punchline;
    	if (currentIndex >= jokes.length - 1) {
    		loadJokes();
    	}
    });
    
};

function loadJokes() {
	axios.get('https://official-joke-api.appspot.com/jokes/ten').then((response) => {
		jokes = response.data;
	});
}
