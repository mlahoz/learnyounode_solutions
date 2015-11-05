var fs = require('fs');

if (process.argv.length > 2) {

    var filename = process.argv[2];
    fs.readFile(filename, 'utf8', function (error, data) {
	if (!error) {
	    console.log(data.split('\n').length - 1);
	}
    });
}
