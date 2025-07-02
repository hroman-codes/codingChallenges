"""
Given an integer array nums sorted 
in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.

EXAMPLE:
-> [-7,-3,2,3,11]
    ^

<- [4,9,9,49,121]

    49

    Assumptions:
        - Assume the array is sorted
        - Can I assume the list will be non empty?
        - Can I assume the list will be greater than 1?
        - Will there ever be a case that all numbers in the list will be the same?
        - Constriansts suggest 10,000 on input should strive to reach O(n) or O(nlogn) time on the sort (Merge and quick sort)
        - Did you want me to implement the merge or quick sort manually or use a built in method?
        - Did you want the final_result sorted in order or returned with a new copy?
        

BRAINSTORM:
Algo1: Iterative approach on list with a merge or quick sort on the result array to provide non-decreasing order
Time: O(nlogn) 
Space: O(n) on runtime and return value

PLAN:
init a final_result list variable

loop through the array 
    find the square of each num
    push the result to the final_result list
    
After the final_result array is built up 
perform a merge sort or use list.sort 
    
    


"""
def sortedSquares(nums):
    final_result = []
    
    for num in nums:
        final_result.append(num ** 2)

    final_result.sort()
    return final_result

sortedSquares([-7,-3,2,3,11])