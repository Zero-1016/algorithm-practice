def solution(brown, yellow):
    answer = []
    half_perimeter_of_yellow = (brown - 4) // 2

    for width_or_height in range(half_perimeter_of_yellow):
        if width_or_height * (half_perimeter_of_yellow - width_or_height) == yellow:
            answer.append(width_or_height + 2)
            answer.append(half_perimeter_of_yellow - width_or_height + 2)
            break

    answer.sort(reverse=True)

    return answer
