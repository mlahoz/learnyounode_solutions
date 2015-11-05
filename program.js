var fs = require('fs');
var path = require('path');

if (process.argv.length == 4) {

    var dirpath = process.argv[2];
    var extension = "." + process.argv[3];

    fs.readdir(dirpath, function (error, list) {

	if (!error) {
	    list.filter(function (item) {
		return path.extname(item) === extension;
	    }).forEach(function (item) {
		console.log(item);
	    });
	}
    });

}
