""""
EXAMPLE:

'abc'
 ^
'pqr'
 ^
 

Assumptions:
    - can i assume that all letters will be lower case? 
    - can I assume that initial strings will be greater than 1

BRAINSTORM:
Algo1: Two pointer approach with one pass on both strings
Time:
Space:

PLAN:

""""

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        
        for i in range(max(len(word1), len(word2))):
            if i < len(word1):
                result.append(word1[i])
            if i < len(word2):
                result.append(word2[i])
                
        return ''.join(result)