def solution(clothesList):
    total = 1
    hash = {}

    for clothes in clothesList:
        for i in range(len(clothes) - 1):
            if clothes[-1] in hash:
                hash[clothes[-1]].append(clothes[i])
            else:
                hash[clothes[-1]] = ["none", clothes[i]]

    for clothes in hash:
        total *= len(hash[clothes])

    return total - 1