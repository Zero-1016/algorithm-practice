def solution(n, times):
    answer = 0
    left = 1
    right = n * max(times)

    # 최소의 시간이 최대의 시간보다 커지거나 같으면 멈춘다.
    while right >= left:
		    # 평균 시간
        mid = (left + right) // 2

        # 전달 받은 시간 동안 입국 심사가 가능한 인원 수
        pass_people = get_pass_people(times, mid)

        # 시간이 여유롭다? 전달 받은 시간을 줄인다.
        if pass_people >= n:
            # 만약 최소의 시간과 최대의 시간이 같다면 반복을 종료한다.
            if left == right:
                answer = mid
                break
            right = mid - 1
            answer = mid

        # 사람이 부족 하다. 전달할 시간을 늘린다.
        elif pass_people < n:
            left = mid + 1

    return answer


def get_pass_people(times, pass_time):
    total = 0
    for time in times:
        total += pass_time // time

    return total