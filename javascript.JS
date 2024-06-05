'use strict'


    const billInput = document.querySelector('.box__left__bill__box__input');
    const button1 = document.querySelector('.button-1');
    const button2 = document.querySelector('.button-2');
    const button3 = document.querySelector('.button-3');
    const button4 = document.querySelector('.button-4');
    const button5 = document.querySelector('.button-5');
    const buttonCustom = document.querySelector('.buttonCustom');
    const peopleNo = document.querySelector('.box__left__people__input');
    const reset = document.querySelector('.box__right-button');
    const tipAmount = document.querySelector('.tipNum');
    const total = document.querySelector('.totalNum');

    let billValue = 0;
    billInput.addEventListener('input',function(){
        tipAmount.textContent = billInput.value;
        console.log(billInput.value);
        billValue = billInput.value;
    })

    
    let billCalc = 0;
    button1.addEventListener('click', function(){
        tipAmount.textContent = (billValue *= 0.05)
        console.log(tipAmount.textContent);

        button1.disabled = true;
    })

    button2.addEventListener('click', function(){
        tipAmount.textContent = (billValue *= 0.1)
        console.log(tipAmount.textContent);

        button2.disabled = true;
    })

    button3.addEventListener('click', function(){
        tipAmount.textContent = (billValue *= 0.15)
        console.log(tipAmount.textContent);

        button3.disabled = true;
    })

    button4.addEventListener('click', function(){
        tipAmount.textContent = (billValue *= 0.25)
        console.log(tipAmount.textContent);

        button4.disabled = true;
    })

    button5.addEventListener('click', function(){
        tipAmount.textContent = (billValue *= 0.5)
        console.log(tipAmount.textContent);

        button5.disabled = true;
    })
   
    total.textContent = 0;
    peopleNo.addEventListener('input', function(){
        total.textContent = (billInput / peopleNo) + tipAmount;
    })