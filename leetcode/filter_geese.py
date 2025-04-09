
"""
input:

    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
      
     - will the input always be greater than 1
     - does capitilzation effect the matching  
     - can I assume every string lenght will be greaster than 1

approach:
    Time:
        - naive - O(n2) nested loop
    Space
        - O(n2) on runtime and O(n) on return value

walk through:

    finalList = [Mallard, Hook Bill, Crested, Blue Swedish]

    list1 = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
                 ^                                                  
    list2 = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
                                                                                       ^
                
    looplist2
        looplist1
            if current item in loop list 2 does not exist in loop list 1
                push item to new final list
                
    return final list 

"""

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    final_list = []
    
    for bird in birds:
        is_goose = False
        for gee in geese:            
            if bird == gee:
                is_goose = True
                break
        if not is_goose:
            final_list.append(bird)
                
    return final_list
                
    
    
    
print(goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))