def solution(s):
    stack = []

    if s[0] == ")" or s[-1] == "(":
        return False

    for check in s:
        if check == "(":
            stack.append(check)
        else:
            try:
                stack.pop()
            except:
                return False
    return not stack