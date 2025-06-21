"""
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. 
Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

Explore:

[1,2,3,4] 
 ^
 
[5,6,7,8]
 ^
 
 clarifications:
    - will both arrays already be sorted? 
    - will both arrays be larger than 1?
    - will arrays be non negative numbers? 
    
set = {
  1: 1
  2: 1
  3: 1
  4: 1
  5: 1
}



[1,2,3,4]
       ^

[5,5,6,7,8]
     ^
 
 frequency issue
 how do I keep track of repeat numbers 

Brainstorm:
Algo: iterative with two independent loops and a set to keep unique items 
Time: O(n)
Space: O(n) on runtime O(n) return value

Plan:
init a set
loop through the first array inject into set
loop throuhg the second array inject into set

Sort the set
return it in an array 


"""




def merge_arrays(arr1, arr2):
    empyt_set = set()
    
    for num in arr1:
        empyt_set.add(num)
    
    for num in arr2:
        empyt_set.add(num)
        
    print(empyt_set)






merge_arrays([1,2,3,4], [5,6,7,8]) # [1,2,3,4,5,6,7,8]