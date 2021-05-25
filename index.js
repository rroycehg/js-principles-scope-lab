// Write your solution in this file!

var customerName = `bob`;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    //purposely not using let, const, or var
    bestCustomer = `not bob`;

}

function overwriteBestCustomer() {
    //calling bestCustomer from above (?)
    bestCustomer = `maybe bob`;
}

const notFavoriteCustomer = `Robert`;

function changeLeastFavoriteCustomer() {
    notFavoriteCustomer = `bob`;    
}