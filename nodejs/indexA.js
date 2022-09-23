// var scriptA = (function(){
//     //scope A
//     //private
//     var age = 20;
//     var firstName = 'Hamza';

//     var log = function(){
//         console.log(this.firstName);
//     }

//     //public
//     return {
//         firstName,
//         log
//     }

// })();
//bublic



// var firstName = "Hamza";
// var log = function (name) {
//   console.log(name);
// };
// //private
// var age = 20;

// module.exports.log = log;
// module.exports.name = firstName;

// // module.exports = {
// //     name : firstName,
// //     log : log
// // }
// module.exports = {
//   firstName,
//   log,
// };



    var firstName = "Hamza";
var log = function (name) {
  console.log(name);
};

exports = {
    firstName,
    log,
  };
