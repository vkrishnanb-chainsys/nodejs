//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules. 

const {readFilec, writeFile} = require('fs'); //fs modules
const { readFile } = require('fs/promises');

//read file  async. 
//(err,result) - this is callback function
//falgs - indicates the behaviour of the file to opened
readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err)
    {
        console.log(err) //if any error logs the error else
        return
    }
    console.log(result)
    console.log('done')
    const first = result;
    readFile('./content/mysecondfile.txt','utf8', (err,result) => {

        if(err)
        {
            console.log(err);
        }
        console.log(result)
    });

    console.log('end')
})

