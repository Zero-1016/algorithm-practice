def solution(citations):
    citations.sort(reverse=True)

    for index, val in enumerate(citations):
        if val <= index:
            return index
        
    return len(citations)
