require('dotenv').config({
	path: './config.env',
})

const bot = require('./bot')

bot
	.launch()
	.then(_ => console.log('Bot listening for request...'))
	.catch(err => console.log(err))
