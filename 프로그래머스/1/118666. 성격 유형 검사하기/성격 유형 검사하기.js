function solution(survey, choices) {
    let answer = '';
    const KAKAO = 'RTCFJMAN';
    const state = new Map();
    KAKAO.split('').map((v) => state.set(v, 0));
    survey.forEach((element, index) => {
        const [bad, good] = element.split('');
        switch (choices[index]) {
            case 1:
                state.set(bad, state.get(bad) + 3);
                break;
                case 2:
                state.set(bad, state.get(bad) + 2);
                break;
                case 3:
                state.set(bad, state.get(bad) + 1);
                break;
                case 5:
                state.set(good, state.get(good) + 1);
                break;
                case 6:
                state.set(good, state.get(good) + 2);
                break;
                case 7:
                state.set(good, state.get(good) + 3);
                break;
        }
    });

    Array.from({ length: 4 }).forEach((v, i) => {
        answer += state.get(KAKAO[i * 2]) >= state.get(KAKAO[i * 2 + 1]) ? KAKAO[i * 2] : KAKAO[i * 2 + 1];
    });


    return answer;
}