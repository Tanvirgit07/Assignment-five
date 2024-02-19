const allSeatButton = document.getElementsByClassName("btn_seat");
let count = 0;
let lessCount = 40;
let totalTaka = 0;
for (const buttonSeat of allSeatButton) {
  buttonSeat.addEventListener("click", function (event) {
    event.target.disabled = true;
    event.target.style.backgroundColor = "#1DD100";
    count = count + 1;
    const seatNumber = document.getElementById("selected_seat");
    seatNumber.innerText = count;
    lessCount = lessCount - 1;
    const selectedAfter = document.getElementById("selected_after");
    selectedAfter.innerText = lessCount;
    const buttonInnerText = event.target.innerText;
    const addSeat = document.getElementById("total_seat");
    const h1 = document.createElement("h1");
    addSeat.appendChild(h1);
    const seatPosition = "Economoy";
    const seatPrice = 550;
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = buttonInnerText;
    p2.innerText = seatPosition;
    p3.innerText = seatPrice;

    h1.appendChild(p1);
    h1.appendChild(p2);
    h1.appendChild(p3);

    h1.classList.add("flex");
    h1.classList.add("justify-between"); 

    totalTaka = totalTaka + 550;
    const totalPrice = document.getElementById("total_tk");
    totalPrice.innerText = totalTaka;
    const grandTaka = document.getElementById("grane_tk");
    grandTaka.innerText = totalTaka;
    const btn = document.getElementById('apply-cupon');
    btn.addEventListener('click',function(){
      const inputValue = document.getElementById('input_element').value.toUpperCase();
      const hiddenItem = document.getElementById('lavel_hidden')
      hiddenItem.classList.add('hidden')
      const anotherHidden = document.getElementById('apply-cupon')
      anotherHidden.classList.add('hidden')
      if(inputValue === 'COUPLE 20'){
        const coupleDiscount = totalTaka*(20/100);
        const totalDiscount = totalTaka - coupleDiscount;

        const discountGrand = document.getElementById('grane_tk');
        discountGrand.innerText = totalDiscount;
      }
      else if(inputValue === 'NEW15'){
        const newDiscount = totalTaka*(15 / 100);
        const newTotal = totalTaka - newDiscount;

        const newGrand = document.getElementById('grane_tk')
        newGrand.innerText = newTotal;

      }
      else{
        alert("COUPON IS WRONG!PLEASE CORRECT...");
      }
    })
    if (count >= 4) {
      const totalButton = document.getElementsByClassName("btn_seat");
      for (const singleButton of totalButton) {
        singleButton.disabled = true;
      }
    }
    
  }); 
}

const nextOnly = document.getElementById('next_btn');
nextOnly.addEventListener('click',function(){
  const  lastSection = document.getElementById('first_section')
  lastSection.classList.add('hidden');
  const firstSection = document.getElementById('last_section')
  firstSection.classList.remove('hidden')
})

 

