const table = document.getElementById("table");
// const table = document.querySelector('#table')

if (table !== null) {
  // table.getElementsByTagName
  const tbody = table.querySelector('tbody');

  const trs = tbody.querySelectorAll('tr');

  const trIndex = Math.trunc(Math.random() * trs.length);
  const tr = trs[trIndex];

  tr.style.backgroundColor = 'green';
  tr.children[0].textContent = "Скидка на " + tr.children[0].textContent;
}
