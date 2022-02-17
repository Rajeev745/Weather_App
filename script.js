let london = document.getElementById("London");
let NewYork = document.getElementById("NewYork");
let LasVegas = document.getElementById("LasVegas");
let LosAngeles = document.getElementById("LosAngeles");

let URL = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

function fun1() {
  URL =
    "https://python3-dot-parul-arena-2.appspot.com/test?cityname=" + "London";
  getData();
}
london.addEventListener("click", fun1);

function fun2() {
  URL =
    "https://python3-dot-parul-arena-2.appspot.com/test?cityname=" + "New York";
  getData();
}
NewYork.addEventListener("click", fun2);

function fun3() {
  URL =
    "https://python3-dot-parul-arena-2.appspot.com/test?cityname=" +
    "Las Vegas";
  getData();
}
LasVegas.addEventListener("click", fun3);

function fun4() {
  URL =
    "https://python3-dot-parul-arena-2.appspot.com/test?cityname=" +
    "Los Angeles";
  getData();
}
LosAngeles.addEventListener("click", fun4);

let body = document.querySelector(".body");
let num = 0;


// calling of data through the API
function getData() {
  let s = "";
  if (URL.includes("London")) {
    s = "London";
  } else if (URL.includes("New York")) {
    s = "New York";
  } else if (URL.includes("Las Vegas")) {
    s = "Las Vegas";
  } else if (URL.includes("Los Angeles")) {
    s = "Los Angeles";
  }
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      body.innerHTML += `<tr class="rows" >
         <td>${s}</td>
        <td>${data.description}</td>
        <td>${data.temp_in_celsius}</td>
        <td>${data.pressure_in_hPa}</td>
        <td>${data.humidity_in_percent}</td>
        <td><div onclick="removeRow(this)" style="cursor:pointer;">Delete</div></td>
        </tr>`;
    });
}

//  Search functionality
function myFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// remove functionality
function removeRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  
}
