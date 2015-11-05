var fs = require('fs');

if (process.argv.length > 2) {

    var filename = process.argv[2];
    var lines = fs.readFileSync(filename).toString().split('\n');
    console.log(lines.length - 1);
}
