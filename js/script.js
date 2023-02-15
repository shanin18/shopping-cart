function getInputValue(id){
    const phonInputField = document.getElementById(id);
    const phoneQuantity = phonInputField.value;
    const phoneQuantityToNumber = parseInt(phoneQuantity);
    return phoneQuantityToNumber
}

function getTextElementValue(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementTextToNumber = parseFloat(elementText);
    return elementTextToNumber;
}

function setValue(id, value){
    document.getElementById(id).value = value;
}

function setText(id, value){
    document.getElementById(id).innerText = value;
}

// total
function getTotal(){
    const phoneTotalPrice = getTextElementValue("phone-price");
    const caseTotalPrice = getTextElementValue("case-price");
    const subtotalPrice = phoneTotalPrice + caseTotalPrice;
    setText("subtotal", subtotalPrice);
    
    const subtotal = getTextElementValue("subtotal");
    const tax = Math.round(subtotal / 100 * 10)
    setText("tax", tax);
    
    const total = subtotal + tax;
    setText("total",total);
    
}

// Remove item 
const items = document.querySelectorAll(".remove-item");
for(const item of items){
    item.addEventListener("click",function(e){
        const parentNode = e.target.parentNode.parentNode.parentNode.parentNode;
        parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    })
}



