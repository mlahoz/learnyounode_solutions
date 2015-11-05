var http = require('http');
var concat = require('concat-stream');

if (process.argv.length === 3) {

    var url = process.argv[2];

    http.get(url, function (response) {

	response.pipe(concat(function (data) {
	    console.log(data.length);
	    console.log(data.toString());

	}));
    });
}
