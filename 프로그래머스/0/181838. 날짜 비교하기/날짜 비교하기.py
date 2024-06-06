def solution(date1, date2):
    answer = 0

    date1_year = str(date1[0])
    date1_month = str(date1[1])
    date1_day = str(date1[2])

    date2_year = str(date2[0])
    date2_month = str(date2[1])
    date2_day = str(date2[2])

    if len(date1_year) < 4:
        while len(date1_year) != 4:
            date1_year = "0" + date1_year

    if len(date2_year) < 4:
        while len(date2_year) != 4:
            date2_year = "0" + date2_year

    if len(date1_month) == 1:
        date1_month = "0" + date1_month

    if len(date2_month) == 1:
        date2_month = "0" + date2_month

    if len(date1_day) == 1:
        date1_day = "0" + date1_day

    if len(date2_day) == 1:
        date2_day = "0" + date2_day

    while True:
        if date1_year[0] < date2_year[0]:
            answer = 1
            break

        if date1_year[0] == date2_year[0] and date1_year[1] < date2_year[1]:
            answer = 1
            break

        if date1_year[0] == date2_year[0] and date1_year[1] == date2_year[1] and date1_year[2] < date2_year[2]:
            answer = 1
            break

        if date1_year[0] == date2_year[0] and date1_year[1] == date2_year[1] and date1_year[2] == date2_year[2] and date1_year[3] < date2_year[3]:
            answer = 1
            break

        if date1_year == date2_year and date1_month[0] < date2_month[0]:
            answer = 1
            break

        if date1_year == date2_year and date1_month[0] == date2_month[0] and date1_month[1] < date2_month[1]:
            answer = 1
            break

        if date1_year == date2_year and date1_month == date2_month and date1_day[0] < date2_day[0]:
            answer = 1
            break

        if date1_year == date2_year and date1_month == date2_month and date1_day[0] == date2_day[0] and date1_day[1] < date2_day[1]:
            answer = 1
            break
        break

    return answer