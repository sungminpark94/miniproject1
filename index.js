//1.가격 확인하는 부분 추가 주 (횟수)회 수고 요청 시 (횟수에 따른 비용)원이면 분리수거 고민 해결!
document.getElementById("submitBtn").addEventListener("click", function() {
    // 입력된 고객 정보 가져오기
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // 정보 확인하기
    if (name && email && phone) {
        alert(`이름: ${name}\n이메일: ${email}\n전화번호: ${phone}`);
    } else {
        alert("모든 정보를 입력해주세요.");
    }
});

const priceSelect=document.getElementById("price-select")
const priceDisplay=document.getElementById("price-display")
const PRICE=2900
let option = 1
let totalPrice = option*PRICE
const changePriceDisplay=() => {
    option = priceSelect.options[priceSelect.selectedIndex].value
    totalPrice=option*PRICE 
    let result = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    priceDisplay.innerText=` ${result} `
}
priceSelect.addEventListener("change",changePriceDisplay)