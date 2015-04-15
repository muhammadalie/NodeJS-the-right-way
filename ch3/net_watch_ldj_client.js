"use strict"
const
    net=require('net'),
    ldj=require('./ldj.js'),
    client=net.connect({port:5432}),
    ldjclient=ldj.connect(client);
ldjclient.on("message",function(message){
    if (message.type=="watching"){
        console.log("Now watching the file: "+message.file+"\n");
    }
    else if (message.type=="changed"){
        console.log("file "+message.file+"changed at --> "+new Date(message.timestamp)+"\n" );
    }
    else {
        throw Error("Un recognized message type: "+message.type);
    }
});
