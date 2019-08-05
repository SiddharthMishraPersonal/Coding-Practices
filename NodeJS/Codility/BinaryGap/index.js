// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryArray = decimal2Binary(N);

    // console.log(binary);
    let binaryStr = binaryArray.join('');
    // console.log(binaryStr);
    let binary = binaryStr.split('1');
    // console.log(binary);
    let result = 0;
    for (let index = 1; index < binary.length - 1; index++) {
        const element = binary[index];
        if (element !== '') {
            if (result < element.length) {
                result = element.length;
            }
        }
    }

    console.log(`${N} => ${binaryStr} => ${result}`);

    return result;

}


function decimal2Binary(num) {
    let result = [];
    while (num > 0) {
        const remainder = num % 2;
        num = Math.floor(num / 2);
        result.push(remainder);
    }

    return result.reverse();
}

// console.log(solution(294));
// console.log(solution(1041));
// console.log(solution(15));
// console.log(solution(32));

for (let index = 0; index < 10000; index++) {    
    solution(index);
}
