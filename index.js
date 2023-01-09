// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = "bob".toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "someone else";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = customerName;
}
