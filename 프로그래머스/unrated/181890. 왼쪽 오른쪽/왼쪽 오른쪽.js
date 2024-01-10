function solution(str_list) {
    while (true) {
        const keywordIndex = str_list.findIndex(value => value === "l" || value === "r")
        
        if(keywordIndex === -1) return []
        
        if (str_list[keywordIndex] === "l") {
            return answer = str_list.filter((v, i) => i < keywordIndex)
        } else {
            return answer = str_list.filter((v, i) => i > keywordIndex)
        }
    }
}