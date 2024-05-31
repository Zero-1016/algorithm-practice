from collections import deque

def solution(maps):
    width = len(maps[0])
    height = len(maps)

    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    queue = deque([(0, 0, 1)])
    visited = [[False] * width for _ in range(height)]
    visited[0][0] = True

    while queue:
        x, y, count = queue.popleft()

        if x == width - 1 and y == height - 1:
            return count

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < width and 0 <= ny < height and not visited[ny][nx] and maps[ny][nx] == 1:
                visited[ny][nx] = True
                queue.append((nx, ny, count + 1))

    return -1