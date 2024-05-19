// price section
// console.log(priceString);

document.getElementById('Coupon-Input-Field').addEventListener('keyup',function(event){
    const applyBtn = document.getElementById('apply-btn');
    // const coupon = document.getElementById('Coupon-Input-Field');
    const  couponText = event.target.value;
    // console.log(couponText);
    if(couponText==='DISC30'){
        applyBtn.removeAttribute('disabled');
    }
    else{
        applyBtn.setAttribute('disabled',true);
    }
})


document.getElementById("apply-btn").addEventListener('click', function () {
    const priceField = document.getElementById("price-input-field");
    const priceString = priceField.value;
    const priceGivenAmount = parseFloat(priceString);
    //   console.log(priceGivenAmount);
    const parcentString = parseFloat(30 / 100);
    const parcentNumber = (parcentString * priceGivenAmount).toFixed(2);
    const parcentNumberTwo = priceGivenAmount - parcentNumber;
    //   console.log(parcentNumberTwo);
    priceField.value = "";
  
    // please pay section
    const pleasePay = document.getElementById("please-pay");
    const getPleasePayString = pleasePay.innerText;
    const getPleasePayNumber = parseFloat(getPleasePayString);
  
    //   console.log(getPleasePayNumber);
    pleasePay.innerText = parcentNumberTwo;
    // coupon---------------------------------------------
   

  });