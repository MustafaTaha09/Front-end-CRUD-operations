// function sayHello(){
//     var x = document.getElementById("username").value;
//     window.alert("hello " + x);
// }

// var user = { firstName: "Mustafa Taha", age: 21, gender: "male", wife:{name:"duonno" , age:21, gender:"female"},
// welcome:function(){
//     console.log("welcome back!");
// } };
// console.log(user.wife);
// user.welcome();

//  var names = ["Mustafa", "Taha", "Mahmoud"];
//  names.sort();
//  names.reverse(); //bt42lb elarray
//  names.push("ali"); //btdef fe a5r elarray
//  names.unshift("hussein"); //btdef fe elawl 3aks push
//  var deletedName = names.pop(); //t2dr t3ml keda. btms7 a5r element
//  names.shift(); //btms7 awl element, 3aks pop.
//  names.splice(0,2); //hamsa7 mn index 0 3add etnen elements
//  names.splice(0, 1, "Fuck", "my", "Life");// will put those 3 elements after u delete.
//  console.log(names.slice(0,3)); // will take a copy but not delete these elements.
//  console.log(names.toString()); //converts it to a string separated with a ","
//  console.log(names.indexOf('my'));//outputs the index of the first word it finds matched ur parameter
//  console.log(names.lastIndexOf("life")); //outputs the index of the last word it found matching the parameter (useful for strings with repition)
//  console.log(deletedName);
//  console.log(names);

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");

var products; //we changed this from var products = []; to this.
if (localStorage.getItem("listOfProducts") == null) {
  //if there is nothing in the local storage
  products = [];
} else {
  products = JSON.parse(localStorage.getItem("listOfProducts")); //parsing it to its original type. from string to array of objects
  display();
}

function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };
  if (checkEmpty(product) == false) {
    products.push(product);
    clearForm();
    display();
    localStorage.setItem("listOfProducts", JSON.stringify(products));
    console.log(localStorage.length);
  } else {
    alert("U need to fill all the fields!");
  }
}
function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productDescription").value = "";
}

function display() {
  var cartoona = ``;
  for (var i = 0; i < products.length; i++) {
    cartoona += `<tr><td>${i}</td><td>${products[i].name}</td><td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick = "updateForm(${i})" class="btn-info mr-auto">Update</button></td>
        <td><button onclick = "deleteProduct(${i})" class="btn-warning mr-auto">Delete</button></td></tr>`;
  }
  console.log(cartoona);
  document.getElementById("tableBody").innerHTML = cartoona;
}

function checkEmpty(product) {
  if (
    product.name != "" &&
    product.price != "" &&
    product.category != "" &&
    product.description != ""
  ) {
    return false;
  } else {
    return true;
  }
}

function deleteProduct(idx) {
  products.splice(idx, 1);
  localStorage.setItem("listOfProducts", JSON.stringify(products));
  display();
}

function searchProduct(searchTerm) {
  var cartoona = ``;
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
      cartoona += `<tr><td>${i}</td><td>${products[i].name}</td><td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].description}</td>`;
    } else {
    }
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}
function updateForm(idx) {
  var product = {
    productName: products[idx].name,
    productPrice: products[idx].price,
    productCategory: products[idx].category,
    productDescription: products[idx].description,
  };

  document.getElementById("productName").value = product.productName;
  document.getElementById("productPrice").value = product.productPrice;
  document.getElementById("productCategory").value = product.productCategory;
  document.getElementById("productDescription").value = product.productDescription;

//   var product = {
//     productName: document.getElementById("productName").value,
//     productPrice: document.getElementById("productPrice").value,
//     productCategory: document.getElementById("productCategory").value,
//     productDescription: document.getElementById("productDescription").value,
//   };

  deleteProduct(idx);
//   products.splice(idx, 0, product);
  
}
// localStorage.setItem("obj1", "Mustafa"); //set item with key obj1 and value of Mustafa
// console.log(localStorage.getItem("obj1")); //retrieves an item by writing its key
// localStorage.removeItem("obj1"); //removes an item by typing its key
// localStorage.clear(); //clears the local storage
// console.log(localStorage.length);
