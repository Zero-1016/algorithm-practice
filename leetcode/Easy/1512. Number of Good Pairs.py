class Solution:
    def numIdenticalPairs(self, nums: [int]) -> int:
        total = 0
        key = {}
        for num in nums:
            if key.get(num) is None:
                key[num] = 1
            else:
                key[num] += 1

        for i in key:
            if key[i] > 1:
                total += (key[i] * (key[i] - 1)) // 2

        return total
