// const tinderUser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name ="Sammy"
tinderuser.isLoggedIn = false 

console.log(tinderUser);

const regularUset = {
    email: "shrads@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shraddha"
            lastname:"choudhary"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj1 = [3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);