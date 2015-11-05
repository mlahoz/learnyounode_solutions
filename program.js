var http = require('http');
var concat = require('concat-stream');

if (process.argv.length === 5) {

    var url1 = process.argv[2];
    var url2 = process.argv[3];
    var url3 = process.argv[4];

    var urls = [];

    var addUrl = function (url) {

	urls.push({
	    url: url,
	    data: '',
	    done: false
	});

    };

    addUrl(url1);
    addUrl(url2);
    addUrl(url3);

    var isDone = function () {
	return urls.reduce(function (acc, next) {
	    return acc && next.done;
	}, true);
    };

    var setDone = function (index) {
	urls[index].done = true;
	return isDone();
    };

    var setData = function (index, data) {
	urls[index].data = data;
	return setDone(index);
    };

    var printData = function () {

	urls.forEach(function (item) {
	    console.log(item.data);
	});

    };

    var requestData = function (index) {

	http.get(urls[index].url, function (response) {
	    response.pipe(concat(function (data) {
		if (setData(index, data.toString())) {
		    printData();
		}
	    }));
	});
    };

    for (var i = 0; i < urls.length; i++) {
	requestData(i);
    }

}
