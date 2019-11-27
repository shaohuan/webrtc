
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
	response.send('Hello from express');
});

app.get('/webrtc.html', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/webrtc.html'));
});
// app.get('/', (request, response) => {
// 	throw new Error('oops')
// });


app.use((err, request, response, next) => {
	console.log(err);
	response.status(500).send('something broke')
});

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})