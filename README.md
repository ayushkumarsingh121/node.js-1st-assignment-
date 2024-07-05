# node.js-1st-assignment-


Explaination of My First assignment of node js


----------------------------------------------------------------------------------------------------------------------------------


Step 1 : First of all we have to Import crypto module to generate random number

const crypto = require('crypto');

Expaination:-  We take a variable which name is crypto => const crypto 
               and keep it the moudule which is =>  require('crypto')



----------------------------------------------------------------------------------------------------------------------------------


Step 2 :  We have to Import process.argv module to take a arguments from command line Interface

const args = process.argv

Expaination:- We take a variable which name is args => const args
              and keep it the module which is =>  process.argv

What this code do process.argv =>  take it as array in command line Interface
You can check it by console.log(process.argv)

result of console.log(process.argv) => you have to write node fileName.js add 4 5 
                                       and the result comes in array formate 
                                       ["node", "fileName", "add", "4", "5"]


so we have to remove or cut the first two part from the array which is  "node", "fileName" 
so how we can do it ?
By using slice methods, we have to attach slice methods with => const args = process.argv
final code is 
const args = process.argv.slice(2)

but why we use 2?
because we have to cut only 2 parts which are  "node", "fileName"

after cutting this we have, only left     ["add", "4", "5"]




----------------------------------------------------------------------------------------------------------------------------------


Step 3 :-  Now we have  ["add", "4", "5"]

const operation = args[0];

args[0] = "add"
args[1] = "4"
args[2] = "5"

now I have to cut the operation by using slice method 
const numbers = args.slice(1)

then convert the left part into number from strings
.map(Number)

final code =>      const operation = args[0];
                   const numbers = args.slice(1).map(Number);


----------------------------------------------------------------------------------------------------------------------------------


Step 4 :-  ek function create karo with the name Calculator and uske andar 2 parameter pass karo jo ki hai operation, number

then if else condition 

agar operation jo ki add hai vah agar "add" ke equal hai to 
reduce method ka use kr ke add kr do 
but why reduce method becuse hmko 1 value chaiye after calculation and usmai reduce best hai


agar operation jo ki sub hai vah agar "sub" ke equal hai to 
reduce method ka use kr ke sub kr do 


agar operation jo ki multi hai vah agar "multi" ke equal hai to 
reduce method ka use kr ke multi kr do 

agar operation jo ki divide hai vah agar "divide" ke equal hai to 
reduce method ka use kr ke divide kr do 



----------------------------------------------------------------------------------------------------------------------------------


Step 5 : console.log(result)


-----------------------------------------------------------THE COMPLETE-----------------------------------------------------------


Great question! Let’s dive into why we use 0 for addition and 1 for multiplication in the reduce function, and why we don’t use them for subtraction and division.

1. Using 0 for Addition:

When we use reduce to perform addition (like adding up an array of numbers), we start with an initial value of 0.

Why? Because adding 0 to any number doesn’t change the result. It’s like starting from a baseline of zero.


2. Using 1 for Multiplication:

When we use reduce for multiplication (like multiplying all elements in an array), we start with an initial value of 1.

Why? Because multiplying any number by 1 doesn’t change the result. It’s like starting from a baseline of one.


3. Why Not for Subtraction and Division?:

For subtraction, there’s no “neutral” value like 0 or 1. Starting with 0 would give incorrect results.

Similarly, for division, starting with 1 would also lead to incorrect results.

Subtraction and division don’t have the same mathematical properties as addition and multiplication.


4.Impact of Removing Initial Values:

If you remove the initial value:

For addition: The result will be incorrect because the first element of the array will be used as the initial accumulator value.

For multiplication: The result will be zero because the initial accumulator value (without the initial value) is undefined (since there’s no element before the first one).
So, using the correct initial value is essential for accurate results.