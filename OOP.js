import C,{Color as fill,Draw} from './Car.js'

let car1 = new C()
car1.drive();
fill();
Draw();


let user1 = {
    name:'Ramya',
    age:22,
    login(){
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

let user2 = {
    name:'Vasanth',
    age:24,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

let user3 = {
    name:'John',
    age:21,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}

user2.login()
user3.login()

//Class is a template of properties and methods
//static - common variables/methods for class
//       - accessed with className

class Users{ // base class, parent class, super class
    static numberOfUsers = 0;
    constructor(name,age){
        //instance variables
        this.name = name;
        this.age = age;   
        Users.numberOfUsers++;
    }

    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
    logout(){
        console.log('You are logged out')
    }
    static displayTotalUsers(){
        console.log('Total number of Users is '+ Users.numberOfUsers++)
    }
}

let userOne = new Users('Vidya',21)
let userTwo = new Users('Ramesh',33)
let userThree = new Users('Mano',32)
userOne.login()
userTwo.logout()
console.log('Number of Users',Users.numberOfUsers)
Users.displayTotalUsers()

let movie = 'PS1'
let music = new String('ARR')

//inheritance - acquiring properties of
//            - a base class

//derived class, child class, sub class
class Paiduser extends Users{
    constructor(name,age){
        super(name,age);
        this.storage = 100;
    }
    message(){
        console.log('You have 100GB free storage')
    }
    //overriding
    login(){
        console.log('Thank you for your support')
        return this
    }
}

let paidUser1 = new Paiduser('Dhana',22)
paidUser1.login()
paidUser1.message()

//method chaining

paidUser1.login().message()


// function User(name,age){
//     this.name = name;
//     this.age = age;
// }

// User.prototype.login = function(){ //to make login into prototype
//     console.log('hi',this.name)
//     console.log("You are logged in")
// }

// let user6 = new User('Abdul',34)
// user6.login()

//get and set
class Temperature{
    constructor(temp){
        this._temp = temp
    }
    get temperature(){
        return `${this._temp} deg celcius`
    }
    set temperature(temp){
        if(temp>100)
            temp = 100
        this._temp = temp
    }
}

let temp1 = new Temperature(25)

temp1.temperature = 67
console.log(temp1.temperature)