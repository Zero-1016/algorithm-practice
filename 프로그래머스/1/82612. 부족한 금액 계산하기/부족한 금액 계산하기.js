function solution(price, money, count) {
    var answer = -1;
    let pay = 0;
    
    for(let i = 1; i <= count; i++){
            pay += i * price
    }
    
    return pay > money ? pay - money : 0;
}