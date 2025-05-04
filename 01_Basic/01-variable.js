const accountId =  12345
let accountEmail = "haris@google.com"
var accountPassword = "123456"
accountCity = "Faisalabad"
//accountId = 23// not allowed
console.log(accountId);
accountEmail = "hr@google.com"
accountPassword = "234567"
accountCity = "Lahore"
/*
preffer not to use var for declaring variable
because of issues with block scopes and funtion scopes
*/
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity ]);