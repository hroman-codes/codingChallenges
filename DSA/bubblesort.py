def bubble_sort(list):
    indexing_length = len(list) - 1 # Can not apply comparison starting with last item of list (No item to right)
    sorted = False # Flag to check if the list is sorted
    
    while not sorted: # Loop until the list is sorted
        sorted = True # Break the while loop whenever we have gone through all the values
        
        for i in range(0, indexing_length): # For every value in the list
            if list[i] > list[i + 1]: # if value in list is greater than value directly to the right of it
                sorted = False # These values are unsorted
                list[i], list[i + 1] = list[i + 1], list[i] # Swap the values
                
    return list # Return the sorted list

print(bubble_sort([5, 2, 9, 1, 5, 6])) # Example usage
print(bubble_sort([3, 0, 2, 5, -1, 4, 1])) # Example usage
print(bubble_sort([1, 2, 3, 4, 5])) # Example usage
print(bubble_sort([5, 4, 3, 2, 1])) # Example usage
print(bubble_sort([1])) # Example usage
print(bubble_sort([])) # Example usage


# Time Complexity: O(n^2) in the worst case
# Space Complexity: O(1) because we are not using any extra space