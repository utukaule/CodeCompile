let user1 = {
  name: "utkarsh",
  age: 30,
};
let user2 = {
  name: "suvarna",
  age: 54,
};

function use_Call_apply_bind(city){
    console.log(`my name is ${this.name}, my age is ${this.age} and i live in ${city}`)
}


use_Call_apply_bind.call(user1,'pune')
use_Call_apply_bind.apply(user2,['supa'])

const bindImplimentation = use_Call_apply_bind.bind(user1,['mumbai'])
bindImplimentation()


let user3 = {
    name:"suraj",
    age:30,
    greet:function (){
        return `${this.name}`
    }
}

const bindMethod = user3.greet.bind(user3)
console.log(bindMethod())