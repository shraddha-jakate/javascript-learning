// singleton 

//object literals 
//Object.create 

const mySym = Symbol("key1")


const JsUser = {
name: "shraddha",
"full name":"shraddha vasudev jakate",
[mySym]:"mykey1",
age:19,
location:"Maharashtra",
email:"shraddha.jakate@google.com",
isLoggedIn :false,
lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "shrddha@chatgpt.com"
Object.freeze(JsUser)      //JsUser got freezed after this option
JsUser.email = "shraddha@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log("Hi JS User,${this.name}");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting());


