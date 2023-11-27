function solution(number) {
    let num = number
    while(num >= 10){
        num = String(num).split('').reduce((a, b)=> Number(a) + Number(b), 0) % 9
    }    
    return num % 9
}