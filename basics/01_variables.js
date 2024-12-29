const accountId = 144553
let accountEmail = "aish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


/*
Prefer not to use var
becuase of issue in block scope and functional scope
*/
// accountId = 2     // not allowed

accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);