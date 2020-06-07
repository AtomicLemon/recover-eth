var keythereum = require("keythereum");
var datadir = "/home/myusername/.ethereum";
var address = "0xA84199E5d1E718C7c6a389f8d0fa21691be9B5bD";
const password = "mypass";

var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));
