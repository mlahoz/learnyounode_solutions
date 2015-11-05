var filtered_ls = require('./module');

if (process.argv.length == 4) {

    var dirpath = process.argv[2];
    var extension = process.argv[3];

    filtered_ls(dirpath, extension, function (error, list) {

	if (!error) {

	    list.forEach(function (item) {
		console.log(item);
	    });
	}

    });
}
