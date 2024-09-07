function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    if (!head) return null; // 리스트가 비어있다면 null을 반환

    // nums에 있는 값들을 Set으로 변환해 검색 효율을 높임
    const numSet = new Set(nums);

    // head 값이 nums에 있는 값과 일치하면 제거
    while (head && numSet.has(head.val)) {
        head = head.next;
    }

    let current = head;

    // 연결 리스트의 중간 부분에서 값 제거
    while (current && current.next) {
        if (numSet.has(current.next.val)) {
            current.next = current.next.next; // 값을 제거할 때 노드를 건너뜀
        } else {
            current = current.next;
        }
    }

    return head;
}
