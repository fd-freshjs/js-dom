const table = document.getElementById("table");
// const table = document.querySelector('#table')

if (table !== null) {
  // table.getElementsByTagName
  const tbody = table.querySelector('tbody');

  const trs = tbody.querySelectorAll('tr');
  const tr4 = trs[3];

  tr4.children[1].textContent = "04.04.2021";
}
