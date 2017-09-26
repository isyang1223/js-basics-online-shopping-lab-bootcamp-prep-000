var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
var l = cart.length;
if(!l){
  return console.log('your shopping cart is empty.');
}
var itemsAndPrices = [];

for (var = i; i < l; i++){
  var itemsAndPrices = cart[i];
  var item = Object.keys(itemsAndPrices)[0];
  var price = itemsAndPrices[item];
  itemsAndPrices.push(`${item} at \$${price}`);
}
switch (itemsAndPrices.length) {
  case 1:
    break;
  case 2:
    itemsAndPrices = itemsAndPrices.join(' and ');
    break;
  default:
    itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
    itemsAndPrices = itemsAndPrices.join(', ');
}
console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
