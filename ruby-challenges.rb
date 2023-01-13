# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudocode
# Input: variable that contains a number 
# Output: String that says whether the number is even or odd.
# Process: Create a method called even_odd with a conditional (if/else).
# In the conditional statement, the first if determines if the number is even using the built in .even? method. 
# If true, the method returns a string interpolation statement saying <the number> is even. 
# Else, it returns <the number> is odd.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd(number)
    if number.even?
        "#{number} is even."
    else
        "#{number} is odd."
    end     
end    

p even_odd(num1)
p even_odd(num2)
p even_odd(num3)

# Output was as expected: 
# "7 is odd."
# "42 is even."
# "221 is odd."

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudocode
# Input: string
# Output: string with vowels removed
# Process: Create a method called remove_vowels. Use the delete method to remove the vowels. (Need to input lowercase and uppercase vowels to find all intances of vowels.) 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    string.delete("aeiouAEIOU")
end

puts remove_vowels(beatles_album1)
puts remove_vowels(beatles_album2)
puts remove_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
tester4 = 'wow'

# Pseudocode
# Input: String
# Output: String interpolation stating if string is a palindrome or not. 
# Process: create a method called find_palindrome.
# Use a conditional - if the word upcased is strictly equal to the reverse of the word upcased (.reverse.upcase), return a statement saying the word is a palindrome. 
# Else, return a statement saying the word is not a palindrome. (Use string interpolation to include the string from the variable that is input)

def palindrome?(string)
    if string.upcase == string.reverse.upcase
     puts "#{string} is a palindrome."
    else    
    puts "#{string} is not a palindrome."
    end
end    

puts palindrome?(palindrome_tester1)
puts palindrome?(palindrome_tester2)
puts palindrome?(palindrome_tester3)


