function solution(weights) {
    var answer = 0;

    const dict = {}

    weights.sort((a, b) => a - b);

    for (let weight of weights) {
        !dict[weight] ? dict[weight] = 1 : dict[weight]++
    }

    for (let weight of weights) {
        if (dict[weight] > 1) answer += (dict[weight] - 1);

        const Ratio = [weight * (3 / 2), weight * 2, weight * (4 / 3)]

        for (let i = 0; i < Ratio.length; i++) {
            if (dict[Ratio[i]] > 0) {
                answer += dict[Ratio[i]]
            }
        }

        dict[weight] -= 1;
    }

    return answer;
}