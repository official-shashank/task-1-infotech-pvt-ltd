const table_config=[{
  f_name:"shashank",
  l_name:"vishwakarma",
  city:"delhi",
  country:"india",
},
{
  f_name:"deepak",
  l_name:"kumar",
  city:"jharkhnad",
  country:"india"
},{
  f_name:"aman",
  l_name:"pandit",
  city:"UP",
  country:"india",

},
{
  f_name:"ankita",
  l_name:"guha",
  city:"delhi",
  country:"india"
}]
const tbodyEl=document.getElementById('table_data');
let result="";
for(let i=0;i<table_config.length;i++){
   result=result+`
  <tr>
      <td>${i+1}</td>
      <td>${table_config[i].f_name}</td>
      <td>${table_config[i].l_name}</td>
      <td>${table_config[i].city}</td>
      <td>${table_config[i].country}</td>
  </tr>
`;
}
tbodyEl.innerHTML=result;
function add_row_bottom(e) {
  e.preventDefault();
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
 
  tbodyEl.innerHTML += `
      <tr>
          <td>${table_config.length+1}</td>
          <td>${f_name}</td>
          <td>${l_name}</td>
          <td>${city}</td>
          <td>${country}</td>
      </tr>
  `;
}

function add_row_top(e){
  // console.log('row added ');
  e.preventDefault();
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  result = `
  <tr>
      <td>${table_config.length+1}</td>
      <td>${f_name}</td>
      <td>${l_name}</td>
      <td>${city}</td>
      <td>${country}</td>
  </tr>
`+result;

tbodyEl.innerHTML=result;
}

let add_row_b=document.querySelector('.add_row_bottom');
add_row_b.addEventListener('click',add_row_bottom);

let add_row_t=document.querySelector('.add_row_top');
add_row_t.addEventListener('click',add_row_top);