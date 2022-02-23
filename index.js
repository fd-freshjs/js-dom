
const body = document.body;

body.title = 'Title';

const div2 = document.getElementById('div2');

// title, id, className, classList, style

// innerHtml, textContent

div2.before('test before')

div2.after('test')
div2.after('test')

div2.append('inner text') // string OR Node
// div2.appendChild('inner text') // only Node -> error here
