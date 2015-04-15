"use strict"
const
    net=require('net'),
    data=process.argv[2],
    len=Math.ceil(data.length/2),
    array=data.match(new RegExp('.{1,'+(len)+'}', 'g')),
    server=net.createServer(function(connection){
	console.log("subscriber connected");
	connection.write(array[0]);
	
	let timer=setTimeout(function(){
	    connection.write(array[1] + "\n");
	    connection.end();
	},1000);
	connection.on('end',function(){
	    clearTimeout(timer);
	    console.log("Subscriber disconnected");
	});
    });
server.listen(5432,function(){
	console.log("test server, listening for subscribers....!!!");
});

