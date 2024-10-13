const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  // console.log(product, quantity);

  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

// search cart in localStorage

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart"); //cart ke khoja localStorage a

  if (storedCart) {
    cart = JSON.parse(storedCart); // localStorage a card thakle ta object kore cart a jokto kora
  }
  return cart; // localStorage a cart na thakle {} object return korbe
};

//save Product To LocalStorage

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart(); // cart object thakle nibe na thakle {}
  cart[product] = quantity; // object er key er value set kora
  const cartStringified = JSON.stringify(cart); // cart object ke string kora
  localStorage.setItem("cart", cartStringified); // localStorage a cart key hihase cart object ke string hisabe raka
};

// localStorage to website

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart(); // cart nibe 3 number function thake
  for (const product in savedCart) {
    // object a for in loop key pabo product variable a
    const quantity = savedCart[product]; // object er value ber kora
    displayProduct(product, quantity); // display kora website a 2 number function call
  }
};

displayProductFromLocalStorage(); // website a data sobsomoy show korbe tai sobar age ai function call hobe
