class Solution:
    def minFlips(self, target: str) -> int:
        isFlip = "0"
        answer = 0
        left = 0
        while left != len(target):
            if target[left] == isFlip:
                left += 1
            else:
                isFlip = target[left]
                answer += 1
        return answer
