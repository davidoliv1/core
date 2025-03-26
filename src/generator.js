// const max = 1000;

// console.log(this === exports);

// console.log(module)

// console.log(module.exports === exports)

// this.generate = function () {
//     return Math.random() * max;
// }

// exports.generate = function () {
//     return Math.random() * max;
// }

// module.exports = generate;

// function generate () {
//     return Math.random() * max;
// }

// module.exports = {
//     max,
//     generate
// }

module.exports.generate = function() {
    return Math.floor(Math.random() * max);
}

