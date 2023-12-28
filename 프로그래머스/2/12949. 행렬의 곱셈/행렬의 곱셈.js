function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        const result = [];
        for (let y = 0; y < arr2[0].length; y++) { 
            let total = 0;
            for (let z = 0; z < arr2.length; z++) {  
                total += arr1[i][z] * arr2[z][y];
            }
            result.push(total);
        }
        answer.push(result);
    }
    return answer;
}