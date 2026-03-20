# learning_node
learning journey of node
In node.js, If i want to run multiple files then how should i do , for example if one file then i do node file1.js , if more than 1 then ?
We have a command of require 
Say for example inside file1.js, I will write something as require("./file2.js")
but the problem is although i required that file2 , i cannot access anything from inside it . becasue by default all the variables and functions are prevented from leaking.
Hence where we need to use module exports and then require in getter file

Also if there are multiple elements to export such as one variable and also a function then basically we need to use object wrapper



----
Now if I have multiple related modules such as add, multiply etc and now i want all of them to be inside one single folder and from there will export together  but getter should not know whether sum is coming from one file, multiple froim different file etc, so kind of abstration to be done

We have 2 different types of exporting and importing
cjs and mjs( aka commonJS and moduleJS)

CJS : 
module.exports 
require()
By default it is used in nodeJS
Older way but a very popular
sync
used in non-strict mode (for example initilaize variable as just b =10 and it works fine but in MJS it throws reference error as not defined)

MJS: 
export 
import
seen in react angular etc 
newer way 
async 
used in strict mode

