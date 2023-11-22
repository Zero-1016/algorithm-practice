function solution(player, callings) {
    const name = new Map();
    const rank = new Map();

    player.forEach((element, index) => {
        rank.set(element, index + 1);
        name.set(index + 1, element);
    });

    callings.forEach((value) => {
        const nowRanks = rank.get(value);
        rank.set(value, nowRanks -1)
        rank.set(name.get(nowRanks - 1), nowRanks)
        name.set(nowRanks, name.get(nowRanks - 1));
        name.set(nowRanks - 1, value);
    });

    return [...name.values()]
}