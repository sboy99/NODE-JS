# Complete Node js Basics..

# Day1:

- Node is runnig javascript outside browser
- Uses Chromes' v8 engine to compile codes
- Written in c++ in backend

# Day2:

- By default every file is a module in node js
- Introduction to Global variables,Modules,Local variables
  - Global Variables:
    - Predefined in node js comes in every node file(module) these are
      **dirname: Current directory.
      **filename: Current file name.
      module: An object that jot down every sigle information of current file(module)
      require(): Helps to call required module to perform a certain action
      process: Shows all details about current process
  - Local Variables:
    - Local variables come with 'var','let','const'
    - Likewise c, c++ it does not have a specific data type.
    - A variable can hold a number,string,bollean value,array object(user defined datatype in c)
  - Modules:
    - Node has some inbuilt modules.The modules are besically used specific purpose
    - OS Module: All Operating system related information can be gotten from here.
    - Path Module: These modulte can be used for maintaining path and can also be used to access some files to a certain
    - Http: Crucial for server side devolpment can be used to make rest api and many more task (most important in backend devolopmen)

# Day3:HTTP Module [Brief]

- Brief view of HTTP module how to setup and use HTTP module etc.
- Introduction to npm(node package manager):An open-source platform where anyone can publish their modules or packages
- Introduction to package.json (initiate by: npm init -y ) that holds or note dependencies(external modules that are being used to this module or project)
- Nodemon: External package, detect any modifications on current script(index.js) and whenever we save the file nodemon rerun the file

# Day4:FileSystem Module

- Detailed view of promise async await
- When to use promise ?
  - Whenever execution dependecies changes and operations execute in a ordered manner with respective time then Callback Hell can occure to avoid it we use Promise.
  - Async function make that way vere easy to understand and to perform over.
  - Inside a async function we can call await whenever a promise is to return.
- Advanced access to file and perform operations with async readFile,writeFile.
  - Method 1:
    - Classic apporoach to access a file using callBack functions.
  - Method 2:
    - Using 'util' module we can promisify async functions(readFile,writeFile)
  - Method 3:
    - Using '.promises' just after 'fs' module call.Now every time we return promises by calling 'readFile' & 'writeFile'

# Day5:Event Emitter,Creating Server with event Emitter

- Calling 'events' module
  - 'events' module returns a class on require.
  - First we have to create an instance of events module to access its functionalities.
  - I learn about 'on' & 'emit' functions.
    - .on function: declares about custom event and also declare about actions to take when that event occured using a simple callback function.
    - .emit function: Calls/Emits all actions to take with a specific custom event that declared on the .emit function

# Day6: STREAMS...

- Intro:
  - Writeable
  - Readable
  - Duplex
  - Transform
- Create a readFile Stream using createReadStream function from fs module.
- Sending chunked data from stream.
- Sending chunked data from server to client using stream (http,fs modules)
- Sending files to client using readFile(fs module) and http module.
  - things I learned ...
  - Open the file (you want to send to the client) and save the buffer inside a variable.
  - Use response object to send desired data.
  - declare writeHead -> it takes first parameter as sataus 'code' and second paramere is an object which specifies Content Type.
  - Ultimately we end our response by invoking response.end().

# Day7: Express Intro..

- Definition: Epress is a minimal fexible framework of node. That helps to build web-apps in stable and easyest way.
- Install Express: run that command

  > npm i express --save

  [although --save is optional from version 4.0]

- Creating Server with with express..

  _1->_ First invoke express using require

  > const express=require('express')
  > </br>
  > const app= express();

  _2->_ We have to call express with a URI(Uniform Resource Identifier) a HTTP module(GET,POST,PUT,DELETE,...)

  > app.get('/',(req,res)=>{
  > </br>
  > res.send('Hello World..')  
  > })

  - Here app is an express instance which is calling a HTTP module 'get' inside the parameter first is a URI
    and second one is action handler.
  - Whenever User's request url mathes to a certain URI
    respective action is performed.

  _3->_ Hosting server to a Port.

  > const port=process.env.PORT || 5000
  > </br>
  > app.listen(port,()=>console.log(\`Listen to port ${port}...`)) // use `` instead of ""

# Day8:Sending HTML,CSS,JS and other assetes to client...
