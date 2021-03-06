//========================= for Html Header ===================================//
function stickyMenu() {
    var sticky = document.getElementById("sticky");
    if (window.pageYOffset > 220) {
        sticky.classList.add('sticky');

    } else {
        sticky.classList.remove('sticky');

    }
}
window.onscroll = function() {
    stickyMenu();
}

let allVeg = localStorage.getItem("veg") ? JSON.parse(localStorage.getItem("veg")) : []
var arr = [];
var product = [];


function search() {
    let showAll = []
    var inpt = document.getElementById("inpt").value;
    let data = allVeg.find(e => e.name == inpt)
    showAll += `<div class="outer-div">
    <div class="innerItem">
        <div class="upper-cnt">
            <p>GET 10% OFF </p>
        </div>
        <div class="img-cnt">
            <img src="${data.Image}" alt="onion" height="140" width="200">
            <span class="spn-1"></span>
        </div>
        <div class="info-cnt">
            <h5 style="margin-left: 10px;">Fresho</h5>
            <h3 style="margin-left: 10px;">${data.name}</h3><br>
            <input class="inp-1" type="button" name="" value="1 kg Rs${data.price}.00">
        </div>
        <div class="add-info">
            
            <div class="qty-cnt">
            <span class="spn-2"><p class="para"> Stock Avl: </p>&nbsp; ${data.quantity}.00 Kg </span>
                <span class="spn-3"><input type="text" style="width: 50px;" value="Qty"> 
                <input type="text" style="width: 40px;">
                <br>
                <button type="button" onClick="reduceQty(${data.id})" class="btncart" >Add Cart</button></span>

            </div>
        </div>
    </div>`
    document.getElementById("serched").innerHTML = showAll;

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
                showAll += `<div class="outer-div">
                <div class="innerItem">
                    <div class="upper-cnt">
                        <p>GET 10% OFF </p>
                    </div>
                    <div class="img-cnt">
                        <img src="${element.Image}" alt="onion" height="140" width="200">
                        <span class="spn-1"></span>
                    </div>
                    <div class="info-cnt">
                        <h5 style="margin-left: 10px;">Fresho</h5>
                        <h3 style="margin-left: 10px;">${element.name}</h3><br>
                        <input class="inp-1" type="button" name="" value="1 kg-Rs${element.price}.00">
                    </div>
                    <div class="add-info">
                        <span class="spn-2"><p class="para"> Stock Avl: </p>&nbsp; ${element.quantity}.00 Kg </span>
                        <div class="qty-cnt">
                            <span class="spn-3"><input type="text" style="width: 50px;" value="Qty"> 
                            <input type="text" id="buyQuantity${element.id}" style="width: 40px;">
                            <button class="btncart" onclick="reduceQty(${element.id})">Add Cart</button></span>
                           
                        </div>
                    </div>
                </div>  
                   
                </div> `
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

            showAll += `<div class="outer-div">
            <div class="innerItem">
                <div class="upper-cnt">
                
                </div>
                <div class="img-cnt">
                    <img src="${element.Image}" alt="onion" height="140" width="200">
                    <span class="spn-1"></span>
                </div>
                <div class="info-cnt">
                    <h5 style="margin-left: 10px;">Fresho</h5>
                    <h3 style="margin-left: 10px;">${element.name}</h3><br>
                    <input class="inp-1" type="button" name="" value="1 kg-Rs${element.price}.00">
                </div>
                <div class="add-info">
                    <span class="spn-2"><p class="para"> Stock Avl: </p>&nbsp; ${element.quantity}.00 Kg </span>
                    <div class="qty-cnt">
                        <span class="spn-3"><input type="text" style="width: 50px;" value="Qty"> 
                        <input type="text" id="addQuantity${element.id}" style="width: 40px;">
                        <button class="btncart" onclick="addQty(${element.id})">Update Stock</button></span>
                       
                    </div>
                </div>
            </div>  
               
            </div>`

        });


        document.getElementById("seller").innerHTML = showAll;
    }
    //============================= Carts items =====================================//
function cart(id) {
    localStorage.setItem("cart", JSON.stringify(arr));
    let cartData = localStorage.getItem ? JSON.parse(localStorage.getItem("cart")) : []
    let showAll = ""
    console.log(cartData[0][0].Image)
    let x = 0;
    cartData[0].forEach(element => {
        // x + element.price;

        showAll += `<div class="images" id="${element.id}">
        <img src="${element.Image}" alt="Image">
    
            <div class="sub-img">
                <h3>Name: ${element.name}</h3>
                <h3>Price: RS ${element.price}per Kg </h3><br>
                <input class="btn" type="button" id="buy" value="Buy Now")" /></br>
                
            
                
            </div>
        </div>`
    });
    // alert(x)
    // document.getElementById("payment").innerHTML = x;

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