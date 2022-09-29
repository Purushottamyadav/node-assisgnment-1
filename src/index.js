const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile("text.txt","Hello",(err)=>{
		console.log(err)
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile("text.txt",{encoding:"utf-8"},(err,data)=>{
		if(err){
			console.log(err)
		}
		console.log(data)
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile("text.txt"," World",(err)=>{
		console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("text.txt",(err)=>{
		console.log(err)
	})

}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }