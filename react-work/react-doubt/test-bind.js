let customer = {
  id: 1000,
  cname: "ABC",
  age : 24,
  displayInfo: function(){
     console.log(this.id+"  "+this.cname+"  "+this.age);
  }
}

//customer.displayInfo();
// displayInfo is a behaviour of customer of obeject
// We want to execute it for customer 2

let customer2 = {
   id: 1001,
   cname: "DEF",
   age: 25
}

let customer3 = {
   id: 1002,
   cname: "XYZ",
   age: 28
}
//let newDisplayInfo = customer.displayInfo.bind(customer2);
//newDisplayInfo();
customer.displayInfo.bind(customer3)();