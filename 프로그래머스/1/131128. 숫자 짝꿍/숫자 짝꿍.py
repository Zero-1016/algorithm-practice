def solution(X, Y):
    a, b = sorted(list(X), reverse=True), sorted(list(Y),reverse=True)
    hash = {}
    result = ""
    temp = False

    for i in a:
        if hash.get(i) is None:
            hash[i] = 1
        else:
            hash[i] += 1

    for i in b:
        if i in hash and hash[i] != 0:
            if i != "0":
                temp = True
            result += str(i)
            hash[i] -= 1

    if result == "":
        return "-1"
    
    if temp == False:
        return "0"


    return result