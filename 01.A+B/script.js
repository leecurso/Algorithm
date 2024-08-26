const num1 = parseInt(prompt("0보다 큰 정수 A:"));
const num2 = parseInt(prompt("10보다 작은 정수 B:"));

if (num1 > 0 && num2 < 10) {
    const sum = num1 + num2;
    alert("답: " + sum);
} else {
    alert("다시 입력하세요.");
}