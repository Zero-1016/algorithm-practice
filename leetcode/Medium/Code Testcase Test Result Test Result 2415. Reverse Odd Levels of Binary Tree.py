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

class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        queue = deque([root])
        level = 0
        answer = []

        while queue:
            check = []
            for i in range(len(queue)):
                node = queue.popleft()
                if node is None:
                    break
                queue.append(node.left)
                queue.append(node.right)
                check.append(node.val)

            if level % 2 != 0:
                check.reverse()

            for val in check:
                answer.append(val)

            level += 1

        return build_tree(answer)
