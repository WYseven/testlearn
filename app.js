let express = require('express');
let app = express();


app.get('/', (req,res) => {
	res.send('xiugaile123 start consfifififfi')
})

app.listen(3000, () => {
	console.log('server start')
})