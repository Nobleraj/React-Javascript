Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.


str = "4325043", n = 3
435     2043

1 4 3 2 2 1 9 => 
1 3 2 2 1 9
1 2 2 1 9
1 2 1 9
10200


Function smallestElement(num,k){
    
   Var count = 0;indx = [];
   for(var i=0;i<num.length;i++){
     if(num[i] < num[i+1]){
       Index.push(i+1)
     }else{
Index.push(i);
     }
   }

   } 
 
 
}









Given two dimensional matrix, write an algorithm to find out the snake sequence which has the maximum length. There could be many snake sequence in the matrix, you need to return the one with the maximum length. Travel is allowed only in two directions, either go right OR go down.
What is snake sequence: Snake sequence can be made if number in adjacent right cell or number in the adjacent down cell is either +1 or -1 from the number in the current cell.
Example:

Function snakematrix(arr){
 
   Let map = new Map();
  
   for(var i=0;i<arr.length;i++){
     
   for(var j=0;j<arr[i].length;j++){
   
  //right
  if(Math.abs(arr[i][j] - arr[i][j+1])==1 ){
    
    map.set(JSON.strigify([i,j]),1);
  }elseif(Math.abs(arr[i][j] - arr[i+1][j])==1 ){
   map.set(JSON.strigify([i+1,j]),1);
  }
}    
  
  }   

}

