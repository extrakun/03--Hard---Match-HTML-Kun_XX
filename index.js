const runTest = require('./runTest')
const Stack = require('./Stack')
const matchHTML = (htmlTags) => {
  console.log(htmlTags);
  let openTags = ['<p>', '<h1>', '<ul>', '<li>'];
  let closeTags = ['</p>', '</h1>', '</ul>', '</li>']
  let s = new Stack();
  for (let each of htmlTags) {
    if (openTags.indexOf(each) != -1) {
      s.push(each);
    } else if (closeTags.indexOf(each) != -1) {
      let index = closeTags.indexOf(each);

      // pop from stack
      let popped = s.pop();
      let otherIndex = openTags.indexOf(popped);
      if (index != otherIndex) {
        return false;
      }
    }
  }
  console.log(s.data.traverse(n=>console.log(n.getData())))
  if (s.peek()) {
    return false;
  } else {
    return true;
  }
}


// don't touch this line
runTest(matchHTML, ['<p>','hello','</p>']); // true
runTest(matchHTML, ['<h1>','hello','<p>','there','</p>','</h1>']); // true
runTest(matchHTML, ['<h1>','hello','<p>','there','</h1>']); // false
runTest(matchHTML, ['<h1>','hello','<p>','there','</h1>','</p>']); // false
runTest(matchHTML, ['<ul>','<li>','hello','<li>','there','</li>','</ul>']); // false
runTest(matchHTML, ['<ul>','<li>','hello','</li>','<li>','there','</li>','</ul>']); // true