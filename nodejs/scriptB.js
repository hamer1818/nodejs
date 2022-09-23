// var controllerB = (function(){

//     var firstName = 'ortatepe';
//     var log = function(){
//         console.log(this.firstName);
//     }

//     return {
//         firstName,
//         log
//     }

// })();

const indexA = require('./indexA');

indexA.log('Hamza');
indexA.log(indexA.name);