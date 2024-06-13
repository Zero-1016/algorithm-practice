from collections import deque

def solution(n, edge):
    answer = 0
    edge.sort()
    graph = [[] for _ in range(n + 1)]

    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)

    # 방문하지 않음 + 거리를 계산
    distances = [-1] * (n + 1)
    # 1번 노드의 경우 거리가 0
    distances[1] = 0
    queue = deque([1])

    while queue:
        current = queue.popleft()
        for neighbor in graph[current]:
            if distances[neighbor] == -1:
                distances[neighbor] = distances[current] + 1
                queue.append(neighbor)

    max_distance = max(distances)
    answer = distances.count(max_distance)

    return answer
