const accountId = 144553  //const values dont change ,they remain constant 
let accountEmail = "shraddha@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;



//accountId = 2 //not allowed 

accountEmail = "shradss@google.com"
accountPassword = "12536"
accountCity = "Bengluru"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId ,accountEmail ,accountPassword, accountCity ,accountState])  //in this []syntax you can add multiple ,you get output in table form 


