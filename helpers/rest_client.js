const https = require('https');

module.exports = {
    get_jdata : function(path){
        console.log(path);
        https.get(path, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
            console.log('got something');
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log('got all');
            console.log(data);
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
         });
    }   
}