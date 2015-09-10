var request = require('request');
var appName = process.env.name || '';
var time = 1000 * 60 * 30;
var timeout;

function ping(){
	var url = 'https://{appName}.herokuapp.com/';
	if (!appName) return null;
	url = url.replace('{appName}', appName);
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    timeout = setTimeout(ping, time);
	  }
	})
}

ping();

module.exports = function(options){
	if (typeof options === 'string'){
		appName = options;
	} else if (typeof options === 'object'){
		time = object.time || time;
		appName = object.name || appName;
	}
	clearTimeout(timeout);
	ping();
}
