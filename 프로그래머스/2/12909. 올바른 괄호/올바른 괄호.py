def solution(s):
    answer = True
    open = 0
    close = 0
    
    if s[0] == ")":
        return False
    
    for i in range(len(s)):
        if s[i] == "(":
            open += 1
        elif s[i] == ")" and open > close:
            close += 1
        else:
            answer = False
            break

    if open != close:
        answer = False

    return answer
