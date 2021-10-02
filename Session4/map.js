let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [ raksha, srinivas, usha ];
 
const usersMapped = users.map((value,index) => { return{
    fullname: value.name +" " +value.surname,
    id: index + 1
}})
console.log( usersMapped)