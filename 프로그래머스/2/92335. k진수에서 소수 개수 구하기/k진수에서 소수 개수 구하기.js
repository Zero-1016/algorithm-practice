function solution(n, k) {
    const answer = n.toString(k).split('0').filter(part => {
        if (!part || part === '1') return false;

        const num = parseInt(part, 10);

        if (num <= 1) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    });

    return answer.length;
}
