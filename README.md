# learning_node
learning journey of node
In node.js, If i want to run multiple files then how should i do , for example if one file then i do node file1.js , if more than 1 then ?
We have a command of require 
Say for example inside file1.js, I will write something as require("./file2.js")
but the problem is although i required that file2 , i cannot access anything from inside it . becasue by default all the variables and functions are prevented from leaking.
Hence where we need to use module exports and then require in getter file

Also if there are multiple elements to export such as one variable and also a function then basically we need to use object wrapper