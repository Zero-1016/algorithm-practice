class Solution:
    def removeStars(self, s: str) -> str:
        return_value = []

        for i in list(s):
            if i == "*":
                return_value.pop()
            else:
                return_value.append(i)

        return "".join(return_value)
