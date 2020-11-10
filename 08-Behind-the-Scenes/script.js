"use strict";

// ************************************
// An High-Level Overview of Javascript
// ************************************

/*
 Javascript is a high-level, prototype-based object oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single threaded, garbage-collected programming language with first-class funtions and a non blocking event loop concurrency model!!!

 High-Level
  - DOES NOT have to manually ask the computer for memory resources when creating a variable.
  - These are called abstractions, they take all the work away from us. Makeing it nice and easy to learn/use!!
  - Downside? Yes, not nearly as fast or as optimized as low level languages like C.

 Garbage-collected
  - Is a memory management tool; is an algorithim inside of the javascript engine that removes old unused objects from computer memory.

 Interpreted or Just-in-Time Compiled language
  - Converts our javascript into machine code(0s & 1s) inside the javascript engine

 Multi-Paradigm
  - A paradigm is an approach and midset of structuring code, which will direct your coding style and technique.
    * Procedural programming
    * Object-oriented programming(OOP)
    * Funcitonal programming(FP)

 Prototype-based object-oriented
  - Contains prewrtten object blue prints that have yet to have its classes defined.

 First-class functions
  - Functions are simply treated as variables. We can pass them into other functions, and return them from functions.

 Dynamic
  - Refers to Dynamically typed laguages: We do not have to define the datatype when declaring variables and can be automatically changed.

 Non-Blocking Event Loop Conurrency Model in a Single Thread
  - concurrency model: how the javascript engine handles mulitple tasks happening at the same time.
  - Javascript runs on a single thread; can only do one thing at a time.
  - Event loop takes long running tasks and executes them in the 'background', and puts them on main thread when finished!
*/

// *********************************
// The Javascript Engine and Runtime
// *********************************

/*
 What is a javascript engine??

  The engine is a program that executes javascript code!

  Every browser has its own engine! Google chromes engine is the V8 engine! This engine is also used to execute server side JS code.(node js)
  
  Javascript engines run sycnronously on a single thread

  JS engines are composed of two parts; the call stack and heap!

    - memory heap: where information is stored, variables, functions, objects, etc.

    - call stack: Executes code with actionable items like funcition calls.
*/

/*
 Compiled languages vs Interpreted

  Interpreted: Interpreter runs through the source code and executes it line by line.

  Compiled: Entire code is converted into machine code at once, and written into a binary file that can be executed by a computer.

  Just-in-time(JIT) compilation: Entire code is converted into machine code at once, then executed immediatley!(IS NOT written into binary file)
*/

/*
 Javascript Runtime Environment

  Includes everything we need to run JS in the browser(in this case)!!

  JS runtime is essentially a big container!! Within in this container are other smaller containers!!

  These smaller containers in the JS runtime are the JS engine, the Web API's, Call Back Queue, and the Event Loop!

    - JS Engine: Uses memory heap and call stack to store and execute code synchronously.

    - Web API's: funcitonalities provided to the engine from the window object(DOM, webtimeouts, eventlisteners, AJAX, http requests, etc)

    - Call-Back Queue: Contains all of the call-back functions from the Web API's

    - Event Loop: Takes the call-back funtions from the queue and transfers the code to be excuted in the call stack ONCE the stack is EMPTY (essentialy non blocking concurrency model)
*/

// *************************************
// Execution Contexts and The Call Stack
// *************************************

/*
 What is the execution context?

 Execution Conext: Environment in which a piece of JS is executed. Store all the necessary information for some code to be executed.

 Global Execution Context: Default context, created for code that is not inside any functino (top-level).

 One execution context PER FUNCTION: For each funcion call, a new execution context is created. (all together make up the call stack)
*/

/*
 What is inside execution context?

 --Everyting below is genertated during the 'creation phase' right before execution!--

 1. The Variable Environment: variable decarations, functions, and argument objects.

 2. Scope Chain

 3. 'this' keyword

 NOTE: argument objects and 'this' are NOT in arrow functions
*/

/*
 The Call Stack:

 The call stack is where execution contexts get stacked on top of each other, to keep track of where we are in the execution. (one at a time(single thread))

 Since the call stack contexts can only be run one at a time and are stacked upwards; the call stack runs in a FILO(firstin-lastout) manner
*/

// *************************
// Scope and The Scope Chain
// *************************

/*
  Scope Concepts:

  Scoping - How our program's varaibles are organized and accessed. "Where do variable live" or "Where can we access a certain variable, and where not?"  (the idea)

  Lexical scoping - Scoping controlled by placement of functions and blocks in the code. (A linear upward reading of the code from child to parent)

  Scope - Space or environment in which a certain variable is declared(variable environment in the case of functions).Three types of scope, global scope, function scope, and block scope!

 Scope of a variable - Region of our code where a certain variable can be accessed.
*/

/*
  The 3 Types of Scope:

  Global Scope - Any code that is outside any function or block! Variables declared in global scope are accessible anywhere.

  Function/Local Scope - Variables that are accessible ONLY inside the function. 

  Block Scope (ES6) - Variables are only accessible inside a block. HOWEVER, ONLY applies to 'let' and 'const', NOT 'var'. NOTE: In strict mode; functions become block scoped!
*/

/*
  The Scope Chain:

  Every scope always has access wot all the variables from all its outer scopes. This is the scope chain!

  Variable lookup - If a scope needs a variable and cannot find it in the current scope it will look up the 'scope chain' and see if it can find that variable in one of the parent scopes! If found: will use/ if not: refrerence error. (DOES NOT work in reverse)

  The scope chain has nothing to do with the order in which functions were called!!
*/
