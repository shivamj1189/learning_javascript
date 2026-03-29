const accountID=12345678
let accountEmail="cXHbO@example.com" // we use let in place of const because let is block scoped and if we again try to write let accountEmail="abc" 
// then it will throw an error but if we use var then it will not throw an error because var is function scoped and it will allow us to reassign the value of accountEmail.
var accountPassword="mySuperSecretPassword"
accountCity="New York"

//accountID=123 - not allowed because accountID is a constant
accountEmail="Vx9wX@example.com" // - allowed because accountEmail is declared with let
accountPassword="abc" //- allowed because accountPassword is declared with var
accountCity="Los Angeles" //- allowed because accountCity is declared without var, let or const (implicitly global)
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);


console.table({accountID, accountEmail, accountPassword, accountCity})



