import math


def solution(progresses, speeds):
    answer = []
    checked = []

    for i in range(len(progresses)):
        needPoint = 100 - progresses[i]
        needDay = math.ceil(needPoint / speeds[i])
        checked.append(needDay)

    checked.reverse()

    while len(checked) != 0:
        topPoint = checked[-1]
        count = 1
        checked.pop()
        while len(checked) != 0 and topPoint >= checked[-1]:
            count += 1
            checked.pop()

        answer.append(count)

    return answer