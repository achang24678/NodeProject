// var square = (x) =>{
//   var result = x * x;
//   return result;
// };

var square =(x) => x * x;
console.log(square(9));

var user ={
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);  //this is not working since arrowfunction does not bind "This"
  },
  sayHiAlt () {   //regular function will work as normal when being called
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
