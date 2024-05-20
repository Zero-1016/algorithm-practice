function solution(phone_book) {
    const hash = new Set(phone_book);

    for (let phone_number of hash) {
        let prefix = "";
        for (let char of phone_number) {
            prefix += char
            if (hash.has(prefix) && prefix !== phone_number) {
                return false
            }
        }
    }

    return true;
}