
const body = document.body;

body.title = 'Title';

console.dir(body.children); // tags
console.dir(body.childNodes); // tags + text

const div2 = document.getElementById('div3');
// const div2 = document.querySelector('#div3');
console.dir(div2);

const divs = document.getElementsByClassName('class1');
// const divs = document.querySelectorAll('.class1');
console.dir(divs);

// getElementsByTagName
// getElementsByName
