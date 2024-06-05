from collections import deque

# 그리디 알고리즘: 탐욕법 각 단계에서 최적의 선택을 통해 최종적인 해답에 도달하는 것

# 선택 절차 -> 최적인 선택을 해야합니다.

# 적절성 검사 -> 문제의 조건을 만족시키는지 확인해야합니다.

# 해답 검사 -> 문제의 조건을 만족하는지 확인해야합니다.

def solution(people, limit):
    count = 0
    people.sort(reverse=True)
    people = deque(people)

    while people:
        total = people.popleft()
        if people and total + people[-1] <= limit:
                total += people.pop()
            
        count += 1

    return count
