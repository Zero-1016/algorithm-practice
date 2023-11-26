function solution(n, lost, reserve) {
    let have = reserve.sort((a, b)=> a- b);
    let lostStudent = [];
    lost.sort().forEach((v) => {
        const index = have.findIndex((vale) => vale === v);
        if (index < 0) {
            lostStudent.push(v);
        } else {
            have = have.filter((v1, i1) => i1 !== index);
        }
    });
    const students = new Array(n).fill('').map((_, i) => i + 1);
    const haveStudents = students.filter((value) => lostStudent.includes(value) !== true);
    lostStudent.forEach((value) => {
        const index = have.findIndex((val) => val - 1 === value || val + 1 === value);
        if (index >= 0) {
            haveStudents.push(value);
            have = have.filter((v, i) => i !== index);
        }
    });

    return haveStudents.length;
}