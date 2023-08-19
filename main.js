let total = 0;
function handleCLikBtn(target){
    const itemSelected = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const li =  document.createElement("li");
    li.innerText = itemName;
    itemSelected.appendChild(li);
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total)+ parseInt(price);
    document.getElementById("total").innerText=total;
}

function grandTotal(grand){
    // const myTotalString = document.getElementById('grand-total');
    // const myTotal = parseInt(myTotalString);
    document.getElementById('grand-total').innerText=total;
}