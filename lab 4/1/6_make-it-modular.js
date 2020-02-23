const dirFilerFunc = require('./6_mymodule.js');

let path = process.argv[2];
let filePrefix = process.argv[3];
let callback = process.argv[4];

dirFilerFunc(path, filePrefix, callback);