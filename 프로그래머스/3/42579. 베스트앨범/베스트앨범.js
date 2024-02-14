function solution(genres, plays) {
    // 장르별로 총 재생 횟수를 계산하는 객체 생성
    const totalPlaysByGenre = {};
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        if (totalPlaysByGenre[genre]) {
            totalPlaysByGenre[genre] += play;
        } else {
            totalPlaysByGenre[genre] = play;
        }
    }

    // 노래 정보를 담은 객체 배열 생성
    const songs = [];
    for (let i = 0; i < genres.length; i++) {
        songs.push({
            id: i,
            genre: genres[i],
            play: plays[i]
        });
    }

    // 재생 횟수와 고유 번호를 기준으로 정렬
    songs.sort((a, b) => {
        if (a.genre === b.genre) {
            if (a.play === b.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        }
        return totalPlaysByGenre[b.genre] - totalPlaysByGenre[a.genre];
    });

    // 각 장르별로 최대 2개의 노래 선택
    const answer = [];
    const selectedSongsByGenre = {};
    for (const song of songs) {
        if (!selectedSongsByGenre[song.genre]) {
            selectedSongsByGenre[song.genre] = 1;
            answer.push(song.id);
        } else if (selectedSongsByGenre[song.genre] < 2) {
            selectedSongsByGenre[song.genre]++;
            answer.push(song.id);
        }
    }

    return answer;
}