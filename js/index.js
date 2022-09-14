const phoneE1 = document.querySelector('#phone-number');
const analyticsE1 = document.querySelector('#analytics');



console.log(phoneE1, analyticsE1);


function analytics() {
    let phoneNumber = phoneE1.value;
    if (phoneNumber == "") {
        alert('請輸入手機號碼')
        return;
    }

    if (phoneNumber.length < 10) {
        alert('手機號碼為10個數字!')
        return;
    }

    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert('手機號碼格式不正確!');
        return;
    }

    console.log(phoneNumber)
}
analytics()