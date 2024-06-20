class Solution:
    def topKFrequent(self, nums: [int], k: int) -> [int]:
        count = {}

        for i in nums:
            if count.get(i) is not None:
                count[i] += 1
            else:
                count[i] = 1

        answer = list(count.keys())
        answer.sort(key=lambda x: count[x], reverse=True)

        return answer[:k]
