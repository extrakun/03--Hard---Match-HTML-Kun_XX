const { createQueueFromInput } = require('./util')
const runTest = (func, htmlTags) => {

  console.log(func(htmlTags));

}

module.exports = runTest;