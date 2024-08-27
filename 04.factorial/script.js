const num = parseInt(prompt("수를 입력하세요:"));

function factorial(n) {
    if (n < 0 || n > 12) {  //0 ≤ N ≤ 12
        alert("0 ≤ N ≤ 12만 계산 가능");
        return;
    }
    let result = 1;
    for (let x = 1; x <= n; x++) {
        result *= x;
    }
    alert("결과: " + result);
}

factorial(num); //계산