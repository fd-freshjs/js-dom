const prodTable = document.querySelector('#products-table')

// const tbody = prodTable.children[1];
const tbody = prodTable.querySelector('tbody');

const arr = [
  { name: 'Яблоко', price: 10 },
  { name: 'Груша', price: 15 }, 
  { name: 'Вишня', price: 20 },
];

let trs = '';
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  let tds = '';

  // Object.values(elem) + for
  const tdName = `<td>${elem.name}</td>`;
  const tdPrice = `<td>${elem.price}</td>`;
  tds += tdName;
  tds += tdPrice;

  trs += `<tr>${tds}</tr>`;
}
tbody.innerHTML = trs;

// ==========

let trs = [];
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  let tds = [];

  const tdName = document.createElement('td');
  tdName.textContent = elem.name;
  tds.push(tdName);

  const tdPrice =  document.createElement('td');
  tdPrice.textContent = elem.price;
  tds.push(tdPrice);

  const tr = document.createElement('tr');
  tr.append(...tds);
  trs.push(tr);
}

tbody.append(...trs);

