function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 500, 2000));

const user = {
    username: "shraddha",
    price: 199
};

function handleObject(anyobject) {
    console.log('Username is ' + anyobject.username + ' and price is ' + anyobject.price);
}

handleObject(user);

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


//console.log("Result;",result);

function loginUserMessage(username = "shraddha"){
    if(!username){
        console.log("Please enter a username");
        return

return '${username} just logges in'
}


//console.log(lofinUserMessage("shraddha"));
//console.log(loginUsermessage("shraddha"));