console.log(process.argv.slice(2).reduce(function (acc, next) {
    return acc + Number(next);
}, 0));
