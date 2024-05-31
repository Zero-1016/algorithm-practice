def solution(maps):
    from collections import deque
    
    # 이동 방향 정의 (우, 하, 좌, 상)
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    
    width = len(maps[0])
    height = len(maps)
    
    # BFS를 위한 큐 초기화
    queue = deque([(0, 0, 1)])  # (x좌표, y좌표, 이동 횟수)
    visited = [[False] * width for _ in range(height)]
    visited[0][0] = True
    
    while queue:
        x, y, count = queue.popleft()
        
        # 도착지점에 도달했을 경우
        if x == width - 1 and y == height - 1:
            return count
        
        # 4가지 방향에 대해 탐색
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            # 경계 검사 및 방문 가능 여부 확인
            if 0 <= nx < width and 0 <= ny < height and not visited[ny][nx] and maps[ny][nx] == 1:
                visited[ny][nx] = True
                queue.append((nx, ny, count + 1))
    
    return -1  # 도착지점에 도달할 수 없을 경우