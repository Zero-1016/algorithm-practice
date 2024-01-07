function find(number, room) {
    if(!room.has(number)) { 
        room.set(number, number+1);
        return number
    }
    let p = find(room.get(number), room);
    room.set(number, p + 1);
    return p;
}

function solution(k, room_number) {
    const answer = [];
    const room = new Map();

    room_number.forEach(number => {
        answer.push(find(number, room))
    });

    return [...answer];
}