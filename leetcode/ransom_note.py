"""
Given two strings ransomNote and magazine, return true if ransomNote 
can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

EXAMPLE:

    Input: ransomNote = "a", magazine = "b"
    Output: false

    a != b False

    Input: ransomNote = "aa", magazine = "aab"
    Output: true
    
    dict
    
    {
      a:0  
    }
    
    "aa"  
      ^
    
    "aab"
       ^
      
    "q" 
     ^
     
    "rtz"
       ^
     
    dictionary 
    {
     e:2
     r:0  
    }
       
    "eree"
        ^
    
    "eazrt"
         ^
         
    {
     h:0
     e:0
     r:0
     i:0 
    }
    
    "hheri"
        ^
     
    "hhrbuei"
           ^
     
    Assumptions:
        - can I assume all letter will be lowercase? 
        - can I assume string length will not be empty


BRAINSTORM:
tracking of seen letters in the magazine is needed via dictionary
build up dictionary then compare

Algo1: iterate through list to build up dictioanry / itrate through dictionary to compare
Time: O(n) n being the string
Space: O(n) on runtime and O(1) on return value

PLAN:
init a dictionary

loop through the first string ransomNote and build up the dictionary
with the key being the letter and the value being the frequency
    if the key doesn not exist add the key and the value
    if it does exist increment the value by one

another loop to go through the magazine string
    as we loop look at the dictionary
        if the key being the current letter exist
            decrement the value by one
            
loop through the dictionary
    if at any point any of the values is greater that 0
    we return false
    
    othwerwise return true
"""



def canConstruct(ransomNote, magazine):
    seen_letters = {}
    
    for curletter in ransomNote:
        if curletter not in seen_letters:
            seen_letters[curletter] = 1
        else: 
            seen_letters[curletter] += 1
        
    for curletter in magazine:
        if curletter in seen_letters:
            seen_letters[curletter] -= 1
        
    for letter, count in seen_letters.items():
        if count > 0:
            return False
        
    print('True')    
    return True   
              

# canConstruct("hheri", "hhrbuei") #true
canConstruct("aa", "ab") #false
# canConstruct("hheri", "hhrbuei")