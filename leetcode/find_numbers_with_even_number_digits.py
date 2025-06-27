"""
Given an array nums of integers, 
return how many of them contain an even number of digits.

EXAMPLE:
-> [12,345,2,6,7896]
    ^
<- 2

-> [-12, 1, 0]
            ^
<- 1

-> []
<- 0

    assumptions
        - do I count negative numbers as part of the char? 
        - can I assume that the array will always be > 1?

BRAINSTORM:
result = 0

[12,345,2,6,7896]
 ^
 "12"
 
 ["1", "2"]
        ^.  lenght of 2
  

Algo: iterate through list once check each numer for length
Time: O(n) n being the length of the list
Space: O(n) on runtime and O(1) on return 

PLAN:
init a result variable

loop throught the list of numbers
    on each number convert to string 
    check the length 
    if the length is even
        increment the result counter by 1
        
    return result 
"""

def findNumbers(nums):
    result = 0
    
    for num in nums:
        if len(str(num)) % 2 == 0:
            result += 1
      
    print(result)      
    return result



findNumbers([12,345,2,6,7896])
