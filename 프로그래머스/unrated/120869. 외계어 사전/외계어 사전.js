function solution(spell, dic) {
    let temp = false;
    dic.forEach((element) => {
        let count = 0;
        spell.forEach((el) => {
            if (element.includes(el)) {
                count++;
            }
        });
        if(count === spell.length){
            temp = true
        }
    });
    return temp ? 1 : 2;
}
