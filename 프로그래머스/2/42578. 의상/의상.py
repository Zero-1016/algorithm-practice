def solution(clothesList):
    total = 1
    hash = {}

    for clothes in clothesList:
        for i in range(len(clothes) - 1):
            if clothes[-1] in hash:
                hash[clothes[-1]] += 1
            else:
                hash[clothes[-1]] = 2

    for clothes in hash:
        total *= hash[clothes]

    return total - 1