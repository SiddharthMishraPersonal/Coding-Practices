function solution(N) {
    console.log('************');
    // write your code in JavaScript (Node.js 8.9.4)


    if(N < 1 || N > 100){
        return [];
    }   

    let result = [];
    let uniquenessObj = {};
    
    for(let i=0; i< Math.floor(N/2); i++){
        let unique = false;
        let number;
        let negativeNumber;
        while(!unique){
            number = getRandomNumber(1, 100);
            negativeNumber = number * -1;
            if(!uniquenessObj[number]){
                unique = true;
            }
        }
        
        uniquenessObj[number] = true;
        uniquenessObj[negativeNumber] = true;
        
        result.push(number);
        result.push(negativeNumber);
    }
    
    if(N%2 !== 0){
        result.push(0);
    }

    let sum = 0;
    result.forEach(e=>{
        sum = sum + e;
    });

console.log("Sum: " + sum);

     return result;
}

function getRandomNumber(rangeMin, rangeMax){
    return Math.floor(Math.random() * (Math.floor(rangeMax) - Math.ceil(rangeMin) + 1)) + Math.ceil(rangeMin);
}

// console.log(solution(0));
// console.log(solution(101));
// console.log(solution(3));
// console.log(solution(2));
// console.log(solution(30));
// console.log(solution(13));
// console.log(solution(17));
// console.log(solution(45));
// console.log(solution(22));
// console.log(solution(33));


console.log(Number.isNaN(10.5));
