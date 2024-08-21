function solution(friends, gifts) {
    const fromFriends = {};
    const giftCount = {};
    const nextGift = {};

    for (let i = 0; i < friends.length; i++) {
        fromFriends[friends[i]] = {};
        giftCount[friends[i]] = 0;
        nextGift[friends[i]] = 0;
    }

    for (let i = 0; i < gifts.length; i++) {
        const [from, to] = gifts[i].split(' ');
        if (fromFriends[from].hasOwnProperty(to)) {
            fromFriends[from][to]++;
        } else {
            fromFriends[from][to] = 1;
        }
        giftCount[from]++;
        giftCount[to]--;
    }


    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const giftsFromItoJ = fromFriends[friends[i]][friends[j]] || 0;
            const giftsFromJtoI = fromFriends[friends[j]][friends[i]] || 0;
            if (giftsFromItoJ !== giftsFromJtoI) {
                if (giftsFromItoJ > giftsFromJtoI) {
                    nextGift[friends[i]]++;
                } else {
                    nextGift[friends[j]]++;
                }
            } else {
                if (giftCount[friends[i]] > giftCount[friends[j]]) {
                    nextGift[friends[i]]++;
                } else if (giftCount[friends[j]] > giftCount[friends[i]]) {
                    nextGift[friends[j]]++;
                }
            }
        }
    }

    return Math.max(...Object.values(nextGift));
}