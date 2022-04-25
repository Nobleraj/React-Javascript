//output
function demo() {
  let numbers;
  for (var i = 0; i < 5; i++) {
    numbers = i;
    setTimeout(() => {
      console.log(numbers);
    }, 1000);
  }
}
demo();

//creating the user defined table witn rows ans cloumns
`<input id="rows">
<input id="columns">
<input type="submit" id="submit" onclick="createTable()">

<div>
<table id="form"/>
</div>

function createTable(){
    
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  let table = document.getElementById("form");
  console.log(rows,columns,table);
  for(var row=0;row<rows;row++){
    let tableRow = table.insertRow(row);
    for(var clm=0;clm<columns;clm++){
      let tableClm = tableRow.insertCell(clm);
      if(clm==0){
        tableClm.innerHTML = row + 1;
      }else{
         if(clm % 2 ==0){
          tableClm.innerHTML = rows * clm + 1 + row;
         }else{
         tableClm.innerHTML = rows * (clm + 1) - row;
         }
      }
    }
  }
 }
`;
