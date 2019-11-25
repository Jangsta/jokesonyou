window.onload = function () {
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
		try {
			window.location.href = 'index.html';
		    //tizen.application.getCurrentApplication().exit();
		} catch (ignore) {
		console.log('error');
		}
	});
};