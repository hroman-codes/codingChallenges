""""
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.


INPUT QUESTIONS:
[
   > 0[1,2,3], 6
           ^
    1[3,2,1] 6
    ]

[
    0[1,5], 6
    1[7,3], 10
    2[3,5] 8
    ]

ASSUMPTIONS:
    - can I assum that the list will be greater than 1 per customer?
    - can I assume all amounts will all non negative numbers? 
    - can I assume there will be at least 1 customer

APPROACH:
    naive nested loop 
    Time: O(n2)
    Space: O(n) on runtime O(1)on return value

WALK THROUGH:
    list[6,6]

    [ 
       0 [1,2,3],
              ^
       1 [3,2,1] 
    ]

    - init a dictionary with customer being the key and wealth being the value
    - interate throuhg the 2d array
        - set index 0 as the first key
        - add the first list up and set the total as the value of the first customer/key

    - iterate throuhg the dictionary
        - whoever has thre largest wealth return that value. 
        

"""

class Solution:              
    def maximumWealth(self, accounts):
        total = []
        
        for i, account in enumerate(accounts):
            print(f"index {i}, wealth {account}")
            current = 0

            # Calculate the total wealth for the current customer
            for j, wealth in enumerate(account):
                current += wealth
                print(f'  Account {j} --> ${wealth}, running total: {current}')
            
            total.append(current)
                
        print('Max total wealth -->', max(total))
        return max(total)

solution = Solution()
print(solution.maximumWealth([[1,2,3],[3,2,1]]))  # ➜ Should print 6

# Time: O(n^2)    
# Space: O(n) on runtime O(1) on return value.