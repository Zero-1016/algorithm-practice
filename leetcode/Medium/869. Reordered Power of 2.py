class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        num = sorted(str(n))
        power_list = []

        if n == 1 :
            return True

        for i in range(32):
            power_list.append(sorted(str(2 ** i)))

        if num in power_list:
            return True
        else:
            return False
