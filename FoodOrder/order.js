let allVeg = localStorage.getItem("veg") ? JSON.parse(localStorage.getItem("veg")) : []

function addStock() {
    let data = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "price": document.getElementById("price").value,
        "quantity": document.getElementById("quantity").value,
        "Image": document.getElementById("image").value
    }

    allVeg.push(data);
    localStorage.setItem("veg", JSON.stringify(allVeg));
    ShowVeg();
}

ShowVeg = () => {
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    let showAll = ""
    let obj = allVeg.find(e => e.name == "test2")

    allVeg.forEach(element => {
        if ((+element.quantity) > 0) {
            showAll += `<div class="images" id="${element.id}">
            <img src="${element.Image}" alt="Image">
    
            <div class="sub-img">
                <p>Name: ${element.name}</p>
                <p>Price: RS ${element.price}per Kg </p>
                <input type="number" value="" id="buyQuantity${element.id}">
                <p> Aval Stock :${element.quantity} Kg</6>
                <input class="btn" type="button" id="buy" value="Buy Now" onclick="reduceQty(${element.id})" />
            </div>
        </div>`
        }
    });
    document.getElementById("buyer").innerHTML = showAll;
    UpdateItemList();
}

UpdateItemList = () => {
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    let showAll = ""
    let obj = allVeg.find(e => e.name == "test2")
    allVeg.forEach(element => {

        showAll += `<div class="images" id="${element.id}">
        <img src="${element.Image}" alt="Image">
    
            <div class="sub-img">
                <h3>Name: ${element.name}</h3>
                <h3>Price: RS ${element.price}per Kg </h3><br>
                <label>Quantity</label>
                <input type="number" value="${element.quantity}" id=addQuantity${element.id}>
                <input class="btn" type="button" id="buy" value="Update Stock" onclick="addQty(${element.id})" /></br>
            </div>
        </div>`
        console.log(element.id)
    });

    //showAll+=``
    document.getElementById("seller").innerHTML = showAll;
}

// function cart(id) {
//     let showAll = ""
//     let cartItem = document.getElementById(`cart${id}`).value;
//     allVeg.forEach(element => {
//             showAll += `<div class="images" id="${element.id}">
//         <img src="${element.Image}" alt="Image">
//             <div class="sub-img">
//                 <h3>Name: ${element.name}</h3>
//                 <h3>Price: RS ${element.price}per Kg </h3>
//                 <input type="number" value="${element.quantity}" id=addQuantity${element.id}>
//                 <input class="btn" type="button" id="buy" value="Update Stock" onclick="addQty(${element.id})" /></br>
//             </div>
//         </div>`
//             document.getElementById("cart-item").innerHTML = showAll;
//         }
//     }


function reduceQty(id) {
    var arr = [];
    let buyQty = document.getElementById(`buyQuantity${id}`).value;
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    let product = allVeg.filter(ele => ele.id == id)
    console.log("reduceQty=====", typeof(product[0].quantity), "buyqty==", buyQty, "id===", id)
    product[0].quantity = product[0].quantity >= buyQty ? parseInt(product[0].quantity) - buyQty : alert(`please reduce the quatity to ${product[0].quantity}`)
    localStorage.setItem("veg", JSON.stringify(allVeg));
    ShowVeg();
}

function addQty(id) {
    let buyQty = document.getElementById(`addQuantity${id}`).value
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    let product = allVeg.filter(ele => ele.id == id)
    buyQty > 0 ? product[0].quantity = parseInt(product[0].quantity) + (+buyQty) : alert(`please add quatity greater than 0`)
    localStorage.setItem("veg", JSON.stringify(allVeg));
    ShowVeg();
}