"use strict";
const
   fs = require('fs'),
   spawn = require('child_process').spawn,
   filename = process.argv[2],
   asd=process.argv[3];
if (!filename) {
   throw Error("A file to watch must be specified!");
}
fs.watch(filename, function() {
   let ls = spawn('ls', [(asd)? asd:null, filename]);
   ls.stdout.pipe(process.stdout);
});
console.log("nodejs " +"--harmony "+"watcher_spawn.js "+"file "+"parameter")
console.log("Now watching " + filename + " for changes...");
