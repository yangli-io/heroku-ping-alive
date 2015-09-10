# heroku-ping-alive
Prevents free heroku servers to shut down by constantly pinging it.

```
npm install heroku-ping-alive --save 
```

##As an environment variable
You can save the name of your heroku server as a environment variable - "name"

##Pass in name as a variable
```
var herokuPing = require('heroku-ping-alive')('heroku-name');
```

##Other parameters
```
var herokuPing = require('heroku-ping-alive')({
	time: 1000 * 60 * 30 //In milliseconds, default 30minutes,
	name: 'heroku-name'
});
```

