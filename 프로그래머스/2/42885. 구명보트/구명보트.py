from collections import deque

def solution(people, limit):
    answer = 0
    people.sort(reverse=True)
    people = deque(people)

    while people:
        total = people.popleft()
        if people and total + people[-1] <= limit:
            total += people.pop()
        answer += 1

    return answer