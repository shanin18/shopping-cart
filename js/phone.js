// Phone Quantity Increase
document.getElementById("btn-iphone-plus").addEventListener("click", function(){
    const quantity = getInputValue("phone-quantity");
    const newPhoneQuantity = quantity + 1;
    setValue("phone-quantity", newPhoneQuantity);

    const totalPhonePrice = newPhoneQuantity * 1219;
    setText("phone-price", totalPhonePrice);
    getTotal();
});

// Phone Quantity Decrease
document.getElementById("btn-iphone-minus").addEventListener("click", function(){
    const quantity = getInputValue("phone-quantity");
    const newPhoneQuantity = quantity - 1;
    if(newPhoneQuantity >= 0){
        setValue("phone-quantity", newPhoneQuantity);
    }

    const totalPhonePrice = newPhoneQuantity * 1219;
    if(totalPhonePrice >= 0){
        setText("phone-price", totalPhonePrice);
        getTotal();
    }
});