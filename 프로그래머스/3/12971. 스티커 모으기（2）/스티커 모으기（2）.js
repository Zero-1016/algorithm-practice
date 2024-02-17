function solution(sticker) {
    let first = [0, sticker[0]];
    let last = [0, 0];
    
    if(sticker.length < 2){
        return Math.max(sticker)
    }

    for (let i = 2; i < sticker.length; i++) {
        first[i] = Math.max(first[i - 1], first[i - 2] + sticker[i-1]);
        last[i] = Math.max(last[i - 1], last[i - 2] + sticker[i-1]);
    }
    first[sticker.length] = first[sticker.length - 1];
    last[sticker.length] = Math.max(last[sticker.length - 1], last[sticker.length - 2] + sticker[sticker.length-1]);

    return Math.max(first[sticker.length], last[sticker.length]);
}