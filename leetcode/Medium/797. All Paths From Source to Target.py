from collections import deque

class Solution:
    def allPathsSourceTarget(self, graph: [[int]]) -> [[int]]:
        answer = []
        queue = deque()

        for node in graph[0]:
            queue.append([0, node])

        while queue:
            node = queue.popleft()
            target = node[-1]

            if target == len(graph) - 1:
                answer.append(node)

            for i in graph[target]:
                copy = node.copy()
                copy.append(i)
                queue.append(copy)

        return answer
