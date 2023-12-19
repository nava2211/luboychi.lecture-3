# What is Recursion in Javascript ?

#### recursion Recursion is when a function calls itself until someone stops it. If no one stops it then it'll recurse (call itself) forever. Recursive functions let you perform a unit of work multiple times. Modern programming languages like JavaScript already have the for and while statements as alternatives to recursive functions. But some languages like Closure do not have any looping statements, so you need to use recursion to repeatedly execute a piece of code.

![Alt text](./navachai%20derski.webp)

#### A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely. Once the condition is met, the function stops calling itself. This is called the base condition. To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

![Alt text](./navachai%20derski%202.webp)

#### Call Stack — First let’s talk about functions. In almost all program languages there is a built data structure that manages what happens when functions are invoked. Its named as Call Stack in JavaScript.

#### It’s a stack data structure. Any time a function is invoked it is placed (pushed) on the top of the call stack. When JavaScript sees the return keyword or when the function ends, the complier will remove(pop).

#### We are used to functions being pushed on the call stack and popped off when they are done. When we write recursive functions, we keep pushing new functions (in fact the same function)onto the call stack!

# What is closure in Javascript ?

#### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function

#### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

![Alt text](./navachai%20derski%203.webp)

# Lexical scoping

#### Consider the following example code:

![Alt text](./navachai%20derski%204.webp)

#### init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
