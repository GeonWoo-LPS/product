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
let resultNode = document.getElementById('result');

// products 데이터로 option 부분 생성
function option() {
  products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.price;
    option.innerHTML = `${product.name} - ${product.price}`;
    selectNode.appendChild(option);
  });
}
option();

// 결과창에 선택된 option 표시
function result() {
  let productList = [];
  let selectedProduct = document.querySelectorAll('#select option:checked');
  selectedProduct.forEach((option) => {
    productList.push(option);
  });

  // 재실행 될 때마다 result 부분 초기화
  resultNode.innerHTML = '';

  let shoppingCart = document.createElement('h3');
  shoppingCart.appendChild(document.createTextNode('선택한 상품'));
  resultNode.appendChild(shoppingCart);

  let shoppingList = document.createElement('ul');
  let itemSum = 0;

  productList.forEach((option) => {
    let shoppingItem = document.createElement('li');
    shoppingItem.appendChild(document.createTextNode(option.text));
    shoppingList.appendChild(shoppingItem);
    itemSum += parseInt(option.value);
  });

  resultNode.appendChild(shoppingList);

  let sum = document.createElement('h3');
  sum.appendChild(document.createTextNode(`총액 : ${itemSum}`));
  resultNode.appendChild(sum);
}
selectNode.addEventListener('change', result);

// 결제하기 btn 클릭 시 결제창을 새 창으로 open
function openPayment() {
  let itemSum = 0;
  let selectedProduct = document.querySelectorAll('#select option:checked');

  selectedProduct.forEach((option) => {
    itemSum += parseInt(option.value);
  });

  // result가 공백일 경우 alert 띄움
  if (resultNode.innerHTML.trim() === '') {
    alert('결제할 상품을 선택해야 합니다.');
  } else {
    let paymentWindow = window.open(
      'payment.html',
      '_blank',
      'left=100, top=100, width=500, height=300'
    );
    paymentWindow.itemSum = itemSum;
  }
}

// 결제가 끝나고 result 부분 초기화
function successPayment() {
  resultNode.innerHTML = '';
}
