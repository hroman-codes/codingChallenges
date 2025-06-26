"""
Given a binary array nums, return the maximum number of 
consecutive 1's in the array.

EXAMPLE:
    max_num_consec = 3
    temp_max_num_consec = 0
    cur_num = 1

    <- [1,1,0,1,1,1]
              ^     ^  
    
    -> 3
    
    
    max_num_consec = 0
    temp_max_num_consec = 4
    cur_num = 1
    
    <- [1,1,1,1]
        ^     ^
    
    -> 4
    
    
    max_num_consec = 2
    temp_max_num_consec = 0
    cur_num = 0
    
    i, j = 0, i+1
    
    <- [3,3,5,6,4,4,4]
        ^   ^
    
    -> 
    
    
    Assumptions:
        - will the length be larger than 1? 
        - What should I return if array is the size of length 1?
        - wil array be sorted or unsorted?

BRAINSTORM:
Sliding window?
short circuit possibilites:
    - set a variable to equal the length of the list 
    - if at any time the temp_max_num_consec is equal to the lenght of the list
      short circuit and return the temp_max_num_consec value
    - also if i+1 goes out fo bounce that means we reached the end of the loop 
      
Algo: Sliding Window with one pass over the list O(n)
Time: O(n)
Space: O(n) on runtime O(1) on return value      

Old PLAN:
init a max_num_consec variable
init a temp_max_num_consec variable
init a cur_num variable
set up two pointers i , j and i to be 0 and j to be i + 1

set up while loop

    set cur_num to be the value of i
    increment set temp_max_num_consec by 1
    
    if the value of j is the same as the value of cur_num
        increment temp_max_num_consec
        increment j
    else if the value of J does not equal the cur_num
        set max_num_consec to equal num_consec
        reset temp_max_num_consec
        reset cur_num
    else
        increment i      
        
    
New Plan:
Initialize max_count = 0
Initialize current_count = 0

For each number in nums:
    If number is 1:
        Increment current_count
        Update max_count if current_count is larger
    Else:
        Reset current_count to 0

Return max_count



[1,0,1,1,0,1]

"""

# def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
def findMaxConsecutiveOnes(nums):
    max_count = 0;
    current_count = 0

    for number in nums:
        if number == 1:
            current_count += 1
            if current_count > max_count:
                max_count = current_count
        else:
            current_count = 0
    
    print(max_count)
    return max_count
        
        
findMaxConsecutiveOnes([1,0,1,1,0,1,1,1,1,1]) #5
                                          