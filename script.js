function User(name) {
  this.name = name;
  console.log(name);
}


let obj = new User("John");

//Если свойство "User.prototype.constructor" не будет перезаписано, то всё будет работать правильно 
//User.prototype.constructor = {};

let obj2 = new obj.constructor("Pete");
