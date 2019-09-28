// var n1 = require('./number.js')
// console.log(n1)
// var stats = require('simple-statistics')
// var numList=require('./numlist')
// var mean=require('./test')
// console.log(mean)
console.log(numList)
// console.log(stats.min(numList))

// console.log(stats.mean(numList))
var lodash=require('lodash')
var chunk= lodash.chunk
console.log(chunk(numList,2))


