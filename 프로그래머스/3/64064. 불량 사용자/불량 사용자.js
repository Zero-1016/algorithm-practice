function getBanPatterns(banned_id) {
    return banned_id.map(ban => new RegExp(`^${ban.replace(/\*/g, ".")}$`));
}

function isValidSet(candidate, bannedSets) {
    const sorted = [...candidate].sort().join(",");
    return !bannedSets.has(sorted);
}

function backtrack(index, selected, user_id, patterns, bannedSets) {
    if (index === patterns.length) {
        if (isValidSet(selected, bannedSets)) {
            bannedSets.add([...selected].sort().join(","));
        }
        return;
    }

    for (let user of user_id) {
        if (!selected.has(user) && patterns[index].test(user)) {
            selected.add(user);
            backtrack(index + 1, selected, user_id, patterns, bannedSets);
            selected.delete(user);
        }
    }
}

function solution(user_id, banned_id) {
    const patterns = getBanPatterns(banned_id);
    const bannedSets = new Set();
    backtrack(0, new Set(), user_id, patterns, bannedSets);
    return bannedSets.size;
}