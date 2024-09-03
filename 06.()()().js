function solution(s) {
    var answer = []; //주어진 식별자

    for (const char of s) {
        if (char === '(') {
            answer.push(char);  // 여는 괄호는 추가
        } else {  // char === ')'
            if (answer.length === 0) {
                return false;  // 비어있는데 닫는 괄호가 나오면 false
            }
          answer.pop();  // 비어있지 않다면 앞의 쌍을 이루는 여는 괄호 함께 제거
        }
    }

    // 모든 괄호를 처리한 후 비어있으면 true, 아니면 false
    return answer.length === 0;
}