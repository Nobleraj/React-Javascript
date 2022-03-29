// var let const

//Shadowing variable - illegal shadowing
function test(){
    let a = 2;
    {
        let a = 5; // this a will shadow(variable shadowing) a = 2 vaiable menas oveerlap the variable value
        console.log(a);
    }
    console.log(a);
}


//while shadowing a variable it should not cross boundary of scope, that is we can shadow var variable with let
//but if we try to shadow let variable with var - it will give us a error - this is called illegal shadowing
function test1(){
    var b = 5;
    let c = 10;
    {
        let b = 15;
        //var c = 20;
        console.log(b);
        console.log(c);
    }
}

//let and const are in the temporary dead zone 
// temporary dead zone(TDZ) is the term to describe the state where vaiables 
//are in the scope but they are not yet declared
function temp(){
  console.log(h,i,j); //h - undefined // i and j will show an error because the variables are scoped(TDZ) but not declared
  var h = 10; 
  let i = 20;
  const j = 20;

}
//test();
//test1();
temp();
