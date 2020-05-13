const fs = require('fs')
const src = './src'

function log(text) 
{
	if(!text) return console.error("Goose module :: Please type in text to print.")
    console.log(text)
}

function importData(filename, data)
{
	if(!filename) return console.error("Goose module :: Please type in a filename")
	if(!data) return console.error("Goose module :: Please type in some data or a table of stuff (ex:const myData = {'apples','more apples','more apples':{'isgood':true}})")
	fs.writeFile(filename, JSON.stringify(data), (err) => {
		if(err) console.error(err)
	})
}

function getFileData(filename)
{
	if(!filename) return console.error("Goose module :: Please type in a filename")
	if(!fs.existsSync(filename)) return console.error("Goose module :: File not found.")
	var gooseModuleFileData = fs.readFileSync(filename,'utf8')
	return gooseModuleFileData
}

function createServer()
{
	const server = require('./server.js')
	return server
}

function evalcmd(command)
{
	try{
		eval(command)
	} catch(er) {
		console.error(er)
	}
}

function makeConfig(filename, data)
{
	fs.writeFile(filename, (data), (err) => {
		if(err) console.error(err)
	})
}

module.exports.print = log
module.exports.saveData = importData
module.exports.getFileData = getFileData
module.exports.createServer = createServer
module.exports.evalcmd = evalcmd
module.exports.makeConfig = makeConfig
module.exports.myDate = Date();