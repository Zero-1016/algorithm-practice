function solution(bandage, health, attacks) {
    const second = attacks[attacks.length - 1][0];
    let 현재체력 = health;
    let 연속성공 = 0;
    let life = true;
    Array.from({ length: second + 1 }).forEach((_, index) => {
        let 공격 = attacks.find((value) => value[0] === index);
        if (공격 !== undefined) {
            console.log("공격 들어옴")
            연속성공 = 0;
            현재체력 -= 공격[1];
            if(현재체력 <=0)
                life = false
        } else {
            let 체력증가량 = bandage[1];
            연속성공 += 1;
            if (연속성공 === bandage[0]) {
                체력증가량 += bandage[2];
                연속성공 = 0;
            }
            현재체력 = Math.min(health, 현재체력 + 체력증가량);
        }
    });
    return life ? 현재체력 : -1;
}

