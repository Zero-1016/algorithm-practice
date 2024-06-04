def solution(name):
    KeyBoard = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11,
                "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20,
                "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25}

    n = len(name)
    answer = 0

    for char in name:
        distance = min(KeyBoard[char], 26 - KeyBoard[char])
        answer += distance

    move = n - 1
    for i in range(n):
        next_idx = i + 1
        while next_idx < n and name[next_idx] == 'A':
            next_idx += 1
        move = min(move, 2 * i + n - next_idx, i + 2 * (n - next_idx))

    answer += move

    return answer