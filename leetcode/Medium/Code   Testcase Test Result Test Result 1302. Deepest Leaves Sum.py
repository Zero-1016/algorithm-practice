from typing import Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(values):
    if not values:
        return None

    root = TreeNode(values[0])
    queue = deque([root])
    i = 1

    while queue and i < len(values):
        node = queue.popleft()

        if values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1

        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1

    return root


# 트리 생성 null을 No
values = [1, 2, 3, 4, 5, None, 6, 7, None, None, None, None, 8]
root = build_tree(values)

class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        q = deque([root])
        res = 0
        while q:
            res = 0
            print(len(q))
            for _ in range(len(q)):
                node = q.popleft()

                if not node.left and not node.right:
                    res += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return res

# 트리 생성
values = [1, 2, 3, 4, 5, None, 6, 7, None, None, None, None, 8]
root = build_tree(values)

# Solution 객체 생성 및 함수 실행
solution = Solution()
result = solution.deepestLeavesSum(root)
print(result)  # 예상 결과: 15 (가장 깊은 리프 노드들의 값의 합: 7 + 8)
