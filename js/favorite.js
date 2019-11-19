var newDir, newFile;
tizen.filesystem.resolve("documents", function(dir) 
    {
       newDir = dir.createDirectory("newDir");
       newFile = newDir.createFile("newFilePath.txt");
       newFile.openStream(
        "w",
        function(fs) {
        	 fs.write("test test test");
        	 fs.close();
        }, function(e) {
        	 console.log("Error " + e.message);
        }, "UTF-8");
    });
    
Read from file:

tizen.filesystem.resolve("documents", function(dir) 
    {
       file = dir.resolve("newDir/newFilePath.txt");
       file.openStream(
    	    "r", 
		    function(fs) {
                var text = fs.read(file.fileSize);
                fs.close();
                console.log(text);
            }, function(e) {
                console.log("Error " + e.message);
            }, "UTF-8");
    });