let num_indicate;

let product = `<div class="product_cart">
               <img class="cart_img" alt="" src="images/image-product-1-thumbnail.jpg">
                <div>
                 <p class="cart_text">Fall Limited Edition Sneakers</p>
                 <p class="cart_text">$125.00 x <span id="number">3</span> <span id="result_price">$375.00</span></p>
                 </div>
               <button onclick="deleteItem()" class="no_style delete">
                 <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <use xlink:href="#ic" fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                  </svg>
               </button>
               </div>
               <div class="centre">
         <button class="add_card ">Checkout</button>
       </div>
     </div>`;

// variables

// slider
function getNewImg(element, src_name) {
  //get main img
  let main_img = document.querySelector(".main_img");
  //delete selected class
  let selected_img = document.querySelectorAll(".selected");
  selected_img.forEach(function (el) {
    el.classList.remove("selected");
  });
  //change main img
  main_img.src = src_name;
  // add class selected
  element.children[0].classList.add("selected");
}

// get number

function minusNumber() {
  let input = document.getElementById("inpt");
  let number = document.getElementById("inpt").value;

  if (number > 0) {
    number--;
  }

  input.value = number;
}

function plusNumber() {
  let input = document.getElementById("inpt");
  let number = document.getElementById("inpt").value;
  number++;
  input.value = number;
}

//add to cart

let cart_button = document.querySelector("#cart").parentElement;
//let d=`<div class="cart_idicate"><span class="number">%number%</span></div>`;
let span = `<span class="number">%number%</span>`;
let div = document.createElement("div");

function addToCart() {
  //get number of items
  let number = document.getElementById("inpt").value;
  if (number > 0) {
    //add number indicate
    div.classList.add("cart_idicate");
    let spanNew = span.replace("%number%", number);
    div.innerHTML = spanNew;
    cart_button.appendChild(div);

    // calculate result price
    let price = parseFloat(
      document.querySelector("#price").textContent.substring(1)
    );
    let result_price = price * number;
    console.log(result_price);

    // delete cart_container includes
    let container_activ = document.querySelector(".cart_container_activ");

    container_activ.innerHTML = product;

    let num_count = document.querySelector("#number");
    let result_price_cont = document.querySelector("#result_price");
    num_count.innerHTML = `<span id="number">${number}</span>`;
    result_price_cont.innerHTML = `<span id="result_price">$${result_price}</span></p>`;
    //     result_num = cart_num.replace("%number%", number);
    //     cart_cont.innerHTML = result_num;
  }
}

// let cart_num = ` <button class="no_style" onclick="openCart()">
//                 <svg height="20" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
//                 </button>
//                 <div class="cart_idicate"><span class="number">%number%</span></div>
//                 <img class="avatar" src="images/image-avatar.png">`;
// let cart_num_w =    ` <button class="no_style" onclick="openCart()">
//                 <svg height="20" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
//                     </button>
//               <img class="avatar" src="images/image-avatar.png">`;
// let p=  `<div class="product_cart">
//               <img class="cart_img" alt="" src="images/image-product-1-thumbnail.jpg">
//                 <div>
//                 <p class="cart_text">Fall Limited Edition Sneakers</p>
//                 <p class="cart_text">$125.00 x <span id="number">3</span> <span id="result_price">$375.00</span></p>
//                 </div>
//               <button onclick="deleteItem()" class="no_style delete">
//                 <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                   <use xlink:href="#ic" fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
//                  </svg>
//               </button>
//               </div>
//               div class="centre">
//         <button class="add_card ">Checkout</button>
//       </div>
//     </div>`

//     let p=  `
//               <img class="cart_img" alt="" src="images/image-product-1-thumbnail.jpg">
//                 <div>
//                 <p class="cart_text">Fall Limited Edition Sneakers</p>
//                 <p class="cart_text">$125.00 x <span id="number">3</span> <span id="result_price">$375.00</span></p>
//                 </div>
//               <button onclick="deleteItem()" class="no_style delete">
//                 <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                   <use xlink:href="#ic" fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
//                  </svg>
//               </button>`

//     let product=createElement('div');
//     product.classList.add("product_cart");
//     product.innerHTML=p;

// let result_num;
// let result_price;
// let price = parseFloat(
//   document.querySelector("#price").textContent.substring(1)
// );

// // Add to cart function
// function addToCart() {
//   console.log("Add to cart");
//   let number = document.getElementById("inpt").value;

//   if (number > 0) {
//     // calculate result price
//     result_price = price * number;
//     console.log(result_price);

//     product_cart.innerHTML=product;

//     let price_count = document.querySelector("#number");
//     let result_price_cont = document.querySelector("#result_price");
//     price_count.innerHTML = `<span id="number">${number}</span>`;
//     result_price_cont.innerHTML = `<span id="result_price">$${result_price}</span></p>`;
//     result_num = cart_num.replace("%number%", number);
//     cart_cont.innerHTML = result_num;
//     console.log("Add product");

//     div.classList.add("cart_idicate");
//     div.innerHTML=span;
//     cart_button.appendChild(div);

//     num_indicate=document.querySelector(".cart_indicate");
//   }
// }

// open cart
let cart_active = document.querySelector(".cart_active");
function openCart() {
  console.log("open cart")
  if (cart_active.classList.contains("hidden")) {
    cart_active.classList.remove("hidden");
  } else {
    cart_active.classList.add("hidden");
  }
}

function deleteItem() {
  console.log("delete");
  let container_activ = document.querySelector(".cart_container_activ");

  container_activ.innerHTML = text;
  document.querySelector(".cart_idicate").remove();

  // cart_cont.innerHTML=cart_num_w;
}

// // delete
// let delete_btn = document.querySelector(".delete");
// let product_cart = document.querySelector(".cart_container_activ");
// let cart_aktive=document.querySelector(".cart_active");
let text = `<div class="centre_text">
            <p class ="cart_empty">Your cart is empty</p>
            </div>`;

// Open slider function

// Close Slider
function closeSlider() {
  console.log("closeModalWindow");
  let modalWindow = document.querySelector(".overlay");
  modalWindow.classList.add("hidden");
}

//Open Slider
function openSlider() {
  console.log("Open Slider");
  let modalWindow = document.querySelector(".overlay");
  modalWindow.classList.remove("hidden");
  let main_img = document.querySelector(".main_slider_img");
  main_img.src = "images/image-product-1.jpg";
  let first_selected = modalWindow.querySelector(".slider_btn");
  let selected_img = modalWindow.querySelector(".selected");

  selected_img.classList.remove("selected");

  first_selected.children[0].classList.add("selected");
}
//
function getNewSliderImg(element, src_name) {
  console.log("getNewSliderImg");
  //get main img
  let main_img = document.querySelector(".main_slider_img");
  //delete selected class
  let selected_img = document.querySelectorAll(".selected");
  selected_img.forEach(function (el) {
    el.classList.remove("selected");
  });
  //change main img
  main_img.src = src_name;
  // add class selected
  element.children[0].classList.add("selected");
}
// next slider image
let i = 1;
function getNextImg() {
  let modalWindow = document.querySelector(".overlay");
  let selected_img = modalWindow.querySelectorAll(".imgage");
  selected_img.forEach(function (el) {
    el.classList.remove("selected");
  });
  console.log("getNextImg");
  if (i == 4) {
    i = 1;
  } else {
    i++;
  }
  let main_img = document.querySelector(".main_slider_img");
  console.log(main_img.src);
  main_img.src = `images/image-product-${i}.jpg`;
  selected_img[i - 1].classList.add("selected");
}

// Previous slider image

function getPreviousImg() {
  let modalWindow = document.querySelector(".overlay");
  let selected_img = modalWindow.querySelectorAll(".imgage");
  selected_img.forEach(function (el) {
    el.classList.remove("selected");
  });
  console.log("getPreviousImg");
  if (i == 1) {
    i = 4;
  } else {
    i--;
  }
  let main_img = document.querySelector(".main_slider_img");
  console.log(main_img.src);
  main_img.src = `images/image-product-${i}.jpg`;
  selected_img[i - 1].classList.add("selected");
}

function closeMenu(){
  let burger_menu=document.querySelector(".burger_menu");
  let close_btn=document.querySelector(".btn_menu");
  let ul=document.querySelector("ul");
  burger_menu.classList.add("hidden");
  close_btn.classList.add("hidden");
  ul.classList.add("hidden");
}

function openBurger(){
  let burger_menu=document.querySelector(".burger_menu");
  let close_btn=document.querySelector(".btn_menu");
  let ul=document.querySelector("ul");
  burger_menu.classList.remove("hidden");
  close_btn.classList.remove("hidden");
  ul.classList.remove("hidden");
}


let j=1;
function getPreviousImgMobile(){
  if (j == 1) {
    j = 4;
  } else {
    j--;
  }
  let main_img = document.querySelector(".main_img");
  main_img.src = `images/image-product-${j}.jpg`;
}
function  getNextImgMobile() {
  if (j == 1) {
    j = 4;
  } else {
    j--;
  }
  let main_img = document.querySelector(".main_img");
  main_img.src = `images/image-product-${j}.jpg`;
}