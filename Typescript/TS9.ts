type CustomerID = string;

type Customer = {
    id:CustomerID,
    name:string,
    email?:string
}

type OrderStatus = "Pending"|"Completed"|"Cancelled";

let customer:Customer = {
    id:"IIT007",
    name:"Kamal",
    email:"kamal@gmail.com"
}

type processOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

type Container<T> = { value: T; timestamp: Date };
let CustomerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};