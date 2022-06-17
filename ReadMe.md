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

       $ npm i express --save

  [although --save is optional from version 4.0]

- Creating Server with with express..

  _1->_ First invoke express using require

       const express=require('express')
       const app= express();

  _2->_ We have to call express with a URI(Uniform Resource Identifier) a HTTP module(GET,POST,PUT,DELETE,...)

       app.get('/',(req,res)=>{
       res.send('Hello World..')
       })

  - Here app is an express instance which is calling a HTTP module 'get' inside the parameter first is a URI
    and second one is action handler.
  - Whenever User's request url mathes to a certain URI
    respective action is performed.

  _3->_ Hosting server to a Port.

         const port=process.env.PORT || 5000
         app.listen(port,()=>console.log(`Listen to port ${port}...`)) // use `` instead of ""

# Day8:Sending HTML,CSS,JS and other assetes to client...

# Day9:Middleware..

- ### What is middleware?

  - Middleware is something or some actions that happens in the middle from user request something on server and server sends some output to user.

        ...
         app.get('/',`middleware`,(req,res)=>{
          console.log('Home Page')
        })

- ### What we can do with middleware?
  - We can perform multiple side checking or side operation with a middleware.
    - Example:
      - We can run logger fuction that logs every single avtivity of a user
      - We can run authorize function which decide a user can access certain item or not..
- ### How to define a middleware?

  - There are multiple ways we can use middlewares.Some instances are follwing..

    - we can use it inline..

          ...
          app.get('/path',
          (req,res,next)=>{
            //middleware...
          },
          (req,res)=>{
            //server response ...
          })

      - But problem here is that we can use it only inside this GET method.Theres' no reusability

    - we can declare it in a outside function.This will increase reuseability.

           ...
           const logger=(req,res,next)=>{
            //middleware...
           }
           app.get('/path',logger,(req,res)=>{
            res.send('Alright!..');
           })

      - Here also we can face some issuses although theres; no internal issues but if our project gets bigger n bigger then it will make our code messy.So its always better do create a folder for middleware and export middleware.

             ./middleware/logger.js
              > const logger=(req,res,next)=>{
                  //middleware...
                }
                module.exports={logger}
            ./app.js
              > ...
                const {logger}=require('./middleware/logger);
                 ...
                   app.get('/path',logger,(req,res)=>{
                    res.send('Alright!..')
                   })

- ### Parameters of Middleware..

  - ##### (req,res,next)

    - req: same user request object.Middleware can retrive user requests.
    - res: same server response object.Middleware can send response to cliend if required..
    - next: next is a function instance.That runs next function of the method.

            ...
            app.get('/path',logger,(req,res)=>{
              //server response..
            })

      if we call 'next()' function then only server response will run otherwise if middleware doesn't send any response applicaton wil stuck there..
      So next() call is important.

- ### Using middlewares in a method..

  - ##### Method 1:

          ...
          app.get('/path',middleware,(req,res)=>{
            //server response
          })

    this middleware only run for this '/path' only.

  - ##### Method 2:

          ...
          app.use(middleware)
          app.get('/path',(req,res)=>{
            //server response
          })

    this will run for every url of the server.

  - ##### Method 3:

          ...
          app.use('/specificPath',middleware)
          app.get('/path',(req,res)=>{
            //server response
          })

    this middleware will run for every url of the server after this '/specificPath'.

    - For example: If we wish to run a middleware after an api then we can use..

      ...
      app.use('/api',middleware)

      this middleware will run for every url after '/api' like '/api/products','/api/items' but will not run for '/home'

- ## Using multiple middleware

  - We can use multiple middleware together by defining them inside an array

        ...
        app.use([middleware1,middleware2]);

- ## Types of middleware;

  - #### Custom Middlewares:
    - Those middlewares, created by developer such as `logger` in our case.
  - #### Express Middlewares:
    - Express has some in-built middlewares.We can use them, one of the famous middle ware is `express.static()`. Here using static we can send assets without sending them individually.
  - #### Third-Party Middleware:
    - Those middle middleware comes from external source.
      We can install third party middleware using npm.One of the most used third party middleware is `morgan`. It is used to track every activity of a user on the server.
