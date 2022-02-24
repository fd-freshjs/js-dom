const main = document.querySelector('main');

const arr = [
  { 
  imgSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' ,
  title: 'Lorem Ipsum'
}, {}, {}]

for (let i = 0; i < 3; i++) {
  const obj = arr[i];

  const article = `<article>
    <img src="" />
    <h3>${obj.title}</h3>
    <p>текст-"рыба", часто используемый в печати и вэб-дизайне</p>
    <button>Сгенерировать</button>
  </article>`;

  main.innerHTML += article;
}




// =========

/* 
const main = 
for(i < 3) {
  const article = document.createElement('article')

  const img = document.createElement('img');
  img.src = "https://google.com/...";
  article.append(img);

  const h3 = document.createElement('h3');
  h3.textCentent = 'Heading of article';
  article.append(h3);

  const p = document.createElement('p')
  article.append(p);

  const button = document.createElement('button')
  article.append(button)

  main.append(article)
}
*/
