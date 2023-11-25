function solution(record) {
    let answer = [];
    let result = []
    var user = new Map()

    record.forEach(element => {
        value = element.split(' ')
        answer.push(value[0])   
        if(value[0] === "Enter" || value[0] === "Change")
        user.set(value[1], value[2])
    });

    record.forEach((value, index) => {
        uid = value.split(' ')[1]
        if(answer[index] === "Enter"){
            result.push(`${user.get(uid)}님이 들어왔습니다.`)
        }
        if(answer[index] === "Leave"){
            result.push(`${user.get(uid)}님이 나갔습니다.`)
        }
    })

    return result
}
