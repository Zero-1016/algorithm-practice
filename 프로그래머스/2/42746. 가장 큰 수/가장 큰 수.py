def solution(numbers):
    sort = sorted(numbers, key=lambda item: (str(item) * 4)[0:4])
    sort.reverse()

    result = ""
    for i in sort:
        result += str(i)

    if int(result) == 0:
        return "0"

    return result
