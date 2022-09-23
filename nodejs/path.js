const path = require('path');

let result = path.resolve('path.js');  //dosyanın tam yolunu verir
result = path.extname('path.js'); //dosyanın uzantısını verir
result = path.parse(__filename);    //dosyanın bilgilerini verir

console.log(result);