let allVeg = localStorage.getItem("veg") ? JSON.parse(localStorage.getItem("veg")) : []
var arr = [];
var product = [];


function search() {
    let showAll = []
    var inpt = document.getElementById("inpt").value;
    let data = allVeg.find(e => e.name == inpt)
    showAll += `<div height="150" class="images" id="${data.id}">
            <img height="150" src="${data.Image}" alt="Image">
    
            <div class="sub-img">
                <p>Name: ${data.name}</p>
                <p>Price: RS ${data.price}per Kg </p>
                <input type="number" value="" id="buyQuantity${data.id}">
                <p> Aval Stock :${data.quantity} Kg</6>
                <input class="btn" type="button" id="buy" value="Buy Now" onclick="reduceQty(${data.id})" />
            </div>
        </div>`
    document.getElementById("cart-item").innerHTML = showAll;

}
//=========================== Inserting new Stock ==================================//
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
//========================= Show all vagitables data ================================//
ShowVeg = () => {
        let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
        let showAll = ""

        // console.log(allVeg.find(e => e.name == "Carrots"))

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
    //============================ Update stock HTML Templete ================================//
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

        });


        document.getElementById("seller").innerHTML = showAll;
    }
    //============================= Carts items =====================================//
function cart(id) {
    localStorage.setItem("cart", JSON.stringify(arr));
    let allVeg1 = localStorage.getItem ? JSON.parse(localStorage.getItem("cart")) : []
    console.log(allVeg)
    let showAll = ""
    let obj = allVeg.find(e => e.name == "test2")
    allVeg1.forEach(element => {

        showAll += `<div class="images" id="${element.id}">
        <img src="${element.Image}" alt="Image">
    
            <div class="sub-img">
                <h3>Name: ${element.name}</h3>
                <h3>Price: RS ${element.price}per Kg </h3><br>
                <label>Quantity</label>
                
                
            </div>
        </div>`
    });


    document.getElementById("cart-item").innerHTML = showAll;
}

//============================ Buy product and reduct quantity of data===================//
function reduceQty(id) {

    let buyQty = document.getElementById(`buyQuantity${id}`).value;
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    product = allVeg.filter(ele => ele.id == id)
    arr.push(product)
        // console.log(product)
    product[0].quantity = product[0].quantity >= buyQty ? parseInt(product[0].quantity) - buyQty : alert(`please reduce the quatity to ${product[0].quantity}`)
    localStorage.setItem("veg", JSON.stringify(allVeg));
    ShowVeg();
    cart()
}
//============================ Add stock in existing stock ================================//
function addQty(id) {
    let buyQty = document.getElementById(`addQuantity${id}`).value
    let allVeg = localStorage.getItem ? JSON.parse(localStorage.getItem("veg")) : []
    let product = allVeg.filter(ele => ele.id == id)
    buyQty > 0 ? product[0].quantity = parseInt(product[0].quantity) + (+buyQty) : alert(`please add quatity greater than 0`)
    localStorage.setItem("veg", JSON.stringify(allVeg));
    ShowVeg();
}