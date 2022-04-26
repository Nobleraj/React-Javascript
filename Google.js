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
//create the progress bar using css and javascript
`<!DOCTYPE html>
<html lang="en">
 <title>React App</title>
  </head>
  <body>
    <div class="bar-container">
    <div class="bar"></div>
    </div>
    <button onclick="createBar(2,true)">Click</button>
    <style>
     body{
       background-color : lightgray;
     }
     .bar-container{
         width: 300px;
         height: 40px;
         margin: 20px;
         background-color: gray;
     }
     .bar{
         background-color: green;
         height: 100%;
         width: 0%;
     }
    </style>
    <script>
     //args are secs and boolean flag - the progress bar by javascript - true, css - false   
     function createBar(sec,javascript_css){

        
        let elem = document.querySelector(".bar");
        ////using javascript
        if(javascript_css){
        let percentage = 0;
        let interval = setInterval(()=>{
            percentage++;
            elem.style.width = percentage + '%';
            if(percentage >= 100){
                clearInterval(interval);
            }
        },(sec * 1000) /100);
       }
       //using css
       if(!javascript_css){
        elem.style.transition = `${sec}s linear width`;   
        elem.style.width = '100%';
       }
     }
    </script>
    </body>
</html>
`