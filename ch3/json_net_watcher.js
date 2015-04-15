'use strict'
const 
    fs=require('fs'),
    net=require('net'),
    filename=process.argv[2],
    server=net.createServer(function(connection){
	console.log("subsriber is connected.....");
	connection.write(JSON.stringify({
		type:"watching",
		file:filename
	})+"\n");
	let watcher=fs.watch(filename,function(){
	    connection.write(JSON.stringify({
	  	type:"changed",
		file:filename,
		timestamp:Date.now()
	    })+"\n");
	});
	connection.on('close',function(){
	    console.log("disconnected !!!!");
	    watcher.close();
	});
    });
if(!filename){
    throw Error("required a filename...  ");
}
server.listen(5432,function(){
    console.log("listening for new subscribers...");
});       
	
