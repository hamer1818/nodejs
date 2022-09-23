const url = require('url');


const myUrl = 'http://mywebsite.com:8000/hello.html?id=100&status=active';

// Serialized URL
let result = url.parse(myUrl, true);

console.log(result); //tam bilgilendirme
console.log(result.path);  //
console.log(result.query);
console.log(result.query.id);