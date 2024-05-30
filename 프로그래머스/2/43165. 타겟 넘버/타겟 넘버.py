def solution(numbers, target):
    answer = [0]

    def dfs(value, index):
        if index == len(numbers):
            if value == target:
                answer[0] += 1
            return

        dfs(value + numbers[index], index + 1)
        dfs(value - numbers[index], index + 1)

    dfs(0, 0)

    return answer[0]