import heapq

class SmallestInfiniteSet:
    def __init__(self):
        self.heap = []
        heapq.heapify(self.heap)
        self.minInfinite = 1

    def popSmallest(self):
        if self.heap:
            return heapq.heappop(self.heap)
        pop_value = self.minInfinite
        self.minInfinite += 1
        return pop_value

    def addBack(self, num):
        if self.minInfinite > num and num not in self.heap:
            heapq.heappush(self.heap, num)