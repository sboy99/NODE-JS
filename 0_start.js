/*
Global Vars..
__dirname -> shows current directory path
__filename -> shows current filename with path
module -> Another node file
require() -> used to call module
response ->
process -> show details about current process
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
const name = require("./1_variables");
const OS = require("./2_os");
console.log(name.first, name.last);
name.sayHi(name.first);
console.log(OS.OS_RELEASE); //string
console.log(OS.OS_VERSION); //string
console.log(OS.UP_TIME); //string
console.log(OS.USER); //Object
