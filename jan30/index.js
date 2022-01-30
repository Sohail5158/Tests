  var newlink = "http://universities.hipolabs.com/search?";
  var table = document.getElementById("table");
  fetch(newlink)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
           tr = document.createElement("tr");
           td1 = document.createElement("td");
           td2 = document.createElement("td");
          tr.innerText = data[i].name;
          td1.innerText = data[i].domains;
          td2.innerText = data[i].country;
          tr.append(td1, td2);         
          table.appendChild(tr);
      }
    })
      .catch((err) => console.log("error is occured"));
const searchFun = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('table');
  let tr = myTable.getElementsByTagName('tr');

  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[0];

    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}
