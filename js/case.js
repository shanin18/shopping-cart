// Case Quantity Increase
document.getElementById("btn-case-plus").addEventListener("click", function(){
    const quantity = getInputValue("case-quantity");
    const newCaseQuantity = quantity + 1;
    setValue("case-quantity", newCaseQuantity);

    const totalCasePrice = newCaseQuantity * 59;
    setText("case-price", totalCasePrice);
    getTotal();
})

// Case Quantity Decrease
document.getElementById("btn-case-minus").addEventListener("click", function(){
    const quantity = getInputValue("case-quantity");
    const newCaseQuantity = quantity - 1;
    if(newCaseQuantity >= 0){
        setValue("case-quantity", newCaseQuantity);
    }

    const totalCasePrice = newCaseQuantity * 59;
    if(totalCasePrice >= 0){
        setText("case-price", totalCasePrice);
        getTotal();
    }
})
