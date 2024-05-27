def solution(citations):
    citations.sort(reverse=True)
    citations.append(0)

    for index, val in enumerate(citations, start=1):
        if val <= index:
            return index - 1