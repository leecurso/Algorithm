function solution(n) {
    function check(num) {
        if (num <= 1) return false; // 1은 소수가 아님
        if (num % 2 === 0) return num === 2; // 2는 소수, 그 외 짝수는 소수 아님
        for (let numb = 3; numb * numb <= num; numb += 2) {
            if (num % numb === 0) {
                return false; //홀수로 나눠떨어지면 아님
            }
        }
        return true; //나눠떨어지지 않으면 맞음
    }

    var answer = 0;
    for (let x = 2; x <= n; x++) {
        if (check(x)) answer++; //맞을 때 마다 증가
    }
    return answer;
}