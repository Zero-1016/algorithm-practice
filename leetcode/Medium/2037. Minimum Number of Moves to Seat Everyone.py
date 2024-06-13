class Solution:
    def minMovesToSeat(self, seats: [int], students: [int]) -> int:
        total = 0
        for seat, student in zip(sorted(seats), sorted(students)):
            total += max(seat, student) - min(seat, student)
        return total