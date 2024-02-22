function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    const result = []
    const resultMap = new Set()
    const dp = (visited, value, sum, index) => {
        const copy = [...visited]
        copy.push(value)

        if (copy.length < 3) {
            for (let i = 0; i < nums.length; i++) {
                if (copy.includes(nums[i]) || index > i) continue
                dp(copy, nums[i], sum + nums[i], i)
            }
        } else {
            let val = copy.sort((a, b) => a - b).toString()
            if (resultMap.has(val)) return
            resultMap.add(val)
            result.push(sum)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        dp([], nums[i], nums[i])
    }

    result.forEach(val => {
        if (isPrime(val)) answer++
    })

    return answer;
}