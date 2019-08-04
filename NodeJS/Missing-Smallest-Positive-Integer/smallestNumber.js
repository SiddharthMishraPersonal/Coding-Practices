`use strict`;
function solution(A) {
    if(A.length < 1){
        return 1;
    }
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=> a-b);
    // console.log(A);
    let s = 1;
  A.forEach(val=>{
      if(s === 0 || val < 0){
          s = 1;
      }

      if(val === s){                 
              s++;
      }        
    console.log('s=>'+s + "  val=>" + val);
  });
  console.log(s);
    return s;
}



// solution([1,3,6,4,1,2]);
// solution([-1,-3]);
// solution([2, 3, 7, 6, 8, -1, -10, 15]);
// solution([2, 3, -7, 6, 8, 1, -10, 15 ]);
// solution([1, 1, 0, -1, -2]);
// solution([1,0,-1]);
// solution([-3, -1, 3, 1]);
// solution([]);
// solution([0]);
// solution([-1,0,1]);
// solution([3]);
// solution([1,9,11,12,13,14,15]);

let A = [];
for (let index = 0; index <= 100; index++) {
    A.push(index);    
}

for (let index = 102; index < 200; index++) {
    A.push(index);    
}

console.log(A);
solution(A);