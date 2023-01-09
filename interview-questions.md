# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is all based on objects and classes. Functions are all inside objects, so they are called methods. All programming revolves around classes and objects. Other programming languages have more to do with functions. JavaScript, for example uses functions that are independent from objects. 

Researched answer: (OOP) is programming that is based on data or "objects" as opposed to functions and logic. Objects are self-contained units that consists of both data and code and represent a real-world object or concept. 
In OOP, objects interact through methods (functions associated with an object). Objects can inherit properties and behavior from parent objects. Here are some key principles of OOP: 

Some differences between OOP and functional programming: 
Where OOP is based around objects, functional programming is based around the concept of functions which are independent units of programming. Functions take input and produce output. 
OOP emphasizes the structure of the code and relationships between objects. Functional programming emphasizes evaluating expressions and transforming data. 
OOP is often used to build large, complex systems by dividing them into smaller reusable units (objects). Functional programming is often use to solve mathematical problems or to write brief, efficient code. 
Many computer languages use a combination of these methods. 

1. What is the difference between a Float and an Integer in Ruby? 

Your answer: A float contains portions of a number (like the .45 in the number 3.45). Integers are whole numbers (like 3 or 4)

Researched answer: in Ruby, an integer is a whole number, while a float is a number with a decimal point. Float is short for "floating point number." Some operations in Ruby behave differently for floats and integers. An example is division. 10/3 will output 3, where 10.0/3 will output 3.3333333333333335. 
For storing whole numbers and performing exact math, use integers. For storing decimal numbers and for higher precision, use floats.

1. Ruby has an implicit return. What does that mean? 

Your answer: It means the word return is not required in a function (or method). Implicit means it's implied. 

Researched answer: If a return is the last expression in a path of execution in Ruby, there is no need to add the keyword "return." It is there by default. Ruby methods will always return the evaluated result of the last line unless an explicit return comes before it. 

1. What is a block in Ruby? 

Your answer: A block in Ruby is like the portion between curly braces in JavaScript. It starts with a "def' and ends with an "end."

Researched answer: A block is a piece of code that can be passed to a method as an argument. It is defined using "do" and "end", or with curly braces. Blocks are used in Ruby commonly to perform an operation on each element of things such as arrays or hashes. 

1. How do you extract a value in a Ruby hash?

Your answer: You use the key. 

Researched answer: You can use bracket notation. After the hash name, type the key in square brackets. 
Example: hash = {key1: "value1", key2: "value2}
value1 = hash[:key1] will return value1. 

Another way to extract a value is to use "fetch." Fetch allows you to specify a default value to return if the key is not found in the hash. Using the above example object, you can use value1 = hash.fetch(:key1, "default")

## Looking Ahead: Terms for Next Week

1. Class Inheritance:  In Ruby, this is a way to create a new class that is a modified version of an original class. The new class inherits behavior from the original. The class that is inheriting the behavior is called the subclass. The original class is called the superclass. 

The subclass inherits characteristics from the superclass but it can also have characteristics of its own. 

Example: 

class Animal
    def speak
        puts "Hello!"
    end
end

class Dog < Animal
<!-- //Above, Dog is defined as a subclass of Animal, so now it has access to methods defined in Animal (like speak) and it can have its own methods, (like bark). -->

    def bark
        puts "Ruff!"
    end
end

dog=Dog.new
dog.speak #prints "Hello!"
dog.bark #prints "Woof!"

2. RSpec: RSpec stands for Ruby Specification. It is a testing library for Ruby (like Jest is for Javascript.) It is designed to be readable and easy to use. Like Jest, there is a describe section and an it section. 

Here is an example:

describe "A simple calculator" do
    it "should add numbers" do
    calculator = Calculator.new
    result = calculator.add(2,3)
    expect(result).to eq(5)
end    


3. CRUD: This is an acronym that stands for - Create, Read, Update, Delete. These are the four ways to manipulate data in a database or in persistent storage. 
Create - create data/Post
Read - display data/get
Update - edit data
Delete - remove data

4. Test-driven development: This is a method of software development where tests are written for a piece of code before the code itself is written (like we do in Jest testing in Javascript). This makes the developer focus on requirements before they write the code. Here is the order that test-driven development takes: 

    a. The test is written.

    b. The test should fail at first, for expected reasons. This means that the code is needed for the test to pass and rules out the possibility that the new test will always pass and is flawed.

    c. Then the simplest amount of code is written that allows the test to pass. If the test fails, code should be rewritten to pass. 

    d. Test is run again and should pass.

    e. Code is refactored as needed to improve design and code readability, while ensuring that the behavior and functionality of the code is preserved.

    f. The process is repeated.

5. HTTP: Stands for Hypertext Transfer Protocol. It is a set of rules for transfering data on the internet. It is used to send and recieve data between web clients and servers on the internet and is based on request and response. Requests go out from individual computers to servers and a response returns from the server. The HTTP verbs (based on requests) are: get, post, put, patch, and delete. 
Possible esponses from the server can be evaluated based on the following status codes: 
100 - informational
200 - success
300 - redirect
400 - error on the request side (client side)
500 - error on the response side (server side)


