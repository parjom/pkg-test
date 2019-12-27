const Md5Wrapper = require('./md5-wrapper');

var md5 = new Md5Wrapper();
var data = "pkg-test";
var hash =  md5.createMd5Hash().update(data).digest("hex");

console.log(hash);