const table = document.getElementById("table");
// const table = document.querySelector('#table')

if (table !== null) {
  // table.getElementsByTagName
  // table.querySelector
  const tbody = table.children[1];
  const tr4 = tbody.children[3];

  const date = tr4.children[1];
  date.textContent = "04.04.2021";
}
