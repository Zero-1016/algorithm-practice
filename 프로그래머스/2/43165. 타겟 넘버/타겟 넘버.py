def solution(numbers, target):
    answer = [0]

    def dfs(value, index, numbers, target):
        if index == len(numbers):
            if value == target:
                answer[0] += 1
            return

        dfs(value + numbers[index], index + 1, numbers, target)
        dfs(value - numbers[index], index + 1, numbers, target)

    dfs(0, 0, numbers, target)

    return answer[0]