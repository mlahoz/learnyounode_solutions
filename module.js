var fs = require('fs');
var path = require('path');

function filtered_ls (dirpath, extension, callback) {

    extension = "." + extension;

    fs.readdir(dirpath, function (error, list) {

	if (error) return callback(error);

	callback(null, list.filter(function (item) {
	    return path.extname(item) === extension;
	}));
    });

}

module.exports = filtered_ls;
