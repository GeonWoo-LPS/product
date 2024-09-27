'use strict';

function Product(name, price) {
  this.name = name;
  this.price = price;
}
let products = [
  new Product('대뱃살', 3000),
  new Product('목살', 5000),
  new Product('배꼽살', 4000),
  new Product('중뱃살', 1000),
];

let selectNode = document.getElementById('select');

function option() {
  products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.price;
    option.innerHTML = `${product.name} - ${product.price}`;
    selectNode.appendChild(option);
  });
}

option();
