function solution(arr) {
    var answer = [];  //주어진 식별자

    for (let i = 0; i < arr.length; i++) {
        const last = answer[answer.length - 1];  // 마지막 요소 저장

        if (answer.length === 0) {  // 비어 있는 경우
           answer.push(arr[i]);  // 첫 번째 요소를 추가
        } else if (last !== arr[i]) {  // 마지막 요소와 현재 요소가 다른 경우
            answer.push(arr[i]);  // 현재 요소를 추가
        }
    }

    return answer;  // 최종 결과로 반환
}