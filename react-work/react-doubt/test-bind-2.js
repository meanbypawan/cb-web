function display(){
  console.log(this.id+"  "+this.cname);
}

let customer1 = {
   id: 1001,
   cname : "ABC"
}

let customer2 = {
   id: 1002,
   cname: "XYZ"
}

display.bind(customer1)();
display.bind(customer2)();