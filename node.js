var request = require('request');
 var url='https://github.com/tanishchoudhary/Node-code/edit/main/.github/workflows/node.js.yml'
var  username = 'tanishchoudahry780@gmail.com'
 var password = 'Jaimatadi123!@#'
 auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
 request({
     url: url,
     method: 'GET',
     headers: {
         'Authorization': auth
     }
     }, function(error,response,body){
         if (error) throw error;
         console.log(body);})
