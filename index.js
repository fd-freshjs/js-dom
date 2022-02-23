
const body = document.body;

body.title = 'Title';

const div2 = document.getElementById('div2');

div2.innerHTML = '<div id="newdiv" >tesxt</div>';

const newdiv = document.querySelector('#newdiv');

newdiv.textContent = 'New text';


const div3 = document.getElementById('div3');

const inners = div3.querySelectorAll('.mew')

console.log(inners);
