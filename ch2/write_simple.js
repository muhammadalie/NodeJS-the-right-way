const fs=require('fs');
fs.writeFile('target.txt','this is my \n first lines',function(err){
	if(err){
		throw err;
	}
	console.log("data is saved !!!");
});
