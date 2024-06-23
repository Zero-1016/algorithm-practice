class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        list = []
        cursor = k - 1
        for i in range(n):
            list.append(i + 1)

        for i in range(len(list)-1):
            if cursor >= len(list):
                cursor %= len(list)

            list.pop(cursor)
            cursor += k - 1

        return list[0]
