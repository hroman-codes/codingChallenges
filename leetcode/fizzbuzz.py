class Solution:
    def fizzBuzz(self, n):
        result = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                result.append("FizzBuzz")
            elif i % 3 == 0:
                result.append("Fizz")
            elif i % 5 == 0:
                result.append("Buzz")
            else:
                result.append(f"{i}")
                
        return result
        
        
        
sol = Solution()
print(sol.fizzBuzz(20))

# Space complexity:
# O(n) on run time and O(n) on return value
# Additional note: This function generates a list 
# of results for each number from 1 to n, categorizing them as Fizz, Buzz, or FizzBuzz based on divisibility.

# Time Complexity:
# O(n) because we iterate through each number from 1 to n once.
# The time complexity is linear with respect to n.