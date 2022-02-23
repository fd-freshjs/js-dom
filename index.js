
const body = document.body;

body.title = 'Title';

const div2 = document.getElementById('div2');

// title, id, className, classList, style

// innerHtml, textContent

// div2.before('test before')

// div2.after('test')
// div2.after('test')

// div2.append('<div>inner text</div>') // string OR Node
// div2.appendChild('inner text') // only Node -> error here

const newdiv = document.createElement('div');
newdiv.id = 123;
div2.append(newdiv, 'qwe'); // string, node, ...elem

const span = document.createElement('span');
span.id = 123;
div2.appendChild(span); // node

span.remove();
