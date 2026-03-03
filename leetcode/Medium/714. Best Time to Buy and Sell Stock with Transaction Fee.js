/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const pricesLength = prices.length;
    const holding = new Array(prices.length).fill(0);
    const notHolding = new Array(prices.length).fill(0);

    // 초기값 설정 (Base Case)
    holding[0] = -prices[0]; // 첫째 날 주식을 샀으니, 투자금만큼 마이너스
    notHolding[0] = 0;       // 첫째 날 주식을 안 샀으니, 이익 없음

    for(let i = 1; i < pricesLength; i++){
        // holding[i]를 계산하는 방법:
        // 1. 어제도 주식을 보유하고 있었다면: holding[i-1]
        // 2. 어제는 주식이 없다가 오늘 주식을 샀다면: notHolding[i-1] - prices[i]
        //    (fee는 판매할 때 뺀다고 가정)
        holding[i] = Math.max(holding[i-1], notHolding[i-1] - prices[i]);

        // notHolding[i]를 계산하는 방법:
        // 1. 어제도 주식이 없었다면: notHolding[i-1]
        // 2. 어제 주식을 보유하고 있다가 오늘 팔았다면: holding[i-1] + prices[i] - fee
        notHolding[i] = Math.max(notHolding[i-1], holding[i-1] + prices[i] - fee);
    }

    // 최종 결과는 마지막 날 주식을 보유하고 있지 않은 상태의 최대 이익
    // (주식을 들고 있으면 아직 이익이 확정된 게 아니므로)
    return notHolding[pricesLength - 1];
};
