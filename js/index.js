const tbodyEl=document.getElementById('table_data');
function onAddWebsite(e) {
  e.preventDefault();
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  let i=0;
  tbodyEl.innerHTML += `
      <tr>
          <td>${i=i+1}</td>
          <td>${f_name}</td>
          <td>${l_name}</td>
          <td>${city}</td>
          <td>${country}</td>
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

const add_row_top=document.querySelector('.add_row_top');

add_row_top.addEventListener('click',onAddWebsite);
