function solution(video_len, pos, op_start, op_end, commands) {
    const [last_min, last_sec] = video_len.split(':').map(Number);

    function zero_check(min, sec) {
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        return [min, sec].join(':');
    }

    function is_within_bounds(time, start, end) {
        return (
            (time[0] > start[0] || (time[0] === start[0] && time[1] >= start[1])) &&
            (time[0] < end[0] || (time[0] === end[0] && time[1] <= end[1]))
        );
    }

    function op_check() {
        const check_pos = pos.split(':').map(Number);
        const check_op_start = op_start.split(':').map(Number);
        const check_op_end = op_end.split(':').map(Number);

        if (is_within_bounds(check_pos, check_op_start, check_op_end)) {
            pos = zero_check(...check_op_end);
        }
    }

    function next() {
        let [min, sec] = pos.split(':').map(Number);

        if (min === last_min && sec + 10 >= last_sec) {
            sec = last_sec;
        } else if (sec + 10 >= 60) {
            min += 1;
            sec = (sec + 10) % 60;

            if (min >= last_min && sec > last_sec) {
                min = last_min;
                sec = last_sec;
            }
        } else {
            sec += 10;
        }

        pos = zero_check(min, sec);
        op_check();
    }

    function prev() {
        let [min, sec] = pos.split(':').map(Number);

        if (min === 0 && sec <= 10) {
            min = 0;
            sec = 0;
        } else if (sec - 10 < 0) {
            min = Math.max(min - 1, 0);
            sec = 60 + (sec - 10);
        } else {
            sec -= 10;
        }

        pos = zero_check(min, sec);
        op_check();
    }

    op_check();

    for (const command of commands) {
        switch (command) {
            case 'next':
                next();
                break;
            case 'prev':
                prev();
                break;
        }
    }

    return pos;
}
