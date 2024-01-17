function solution(order) {
    return order.filter(v => v !== 0).length === 0 ? "0" : order.sort((a, b) => Number(String(b).repeat(4).substring(0, 4)) - Number(String(a).repeat(4).substring(0, 4))).join('')
}