// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length <= 0 || S.length > 2000) {
        return -1;
    }

    const ops = S.trim().split(' ');
    const stack = [];

    try {
        ops.forEach(e => {

            if (!Number.isNaN(parseInt(e))) {
                stack.push(parseInt(e));
            }
            else {
                if (e.toUpperCase() === 'DUP') {
                    if(stack.length < 1){
                        throw new Error();
                    }
                    const num = stack[stack.length - 1];
                    stack.push(num);
                }

                if (e.toUpperCase() === 'POP') {                    
                    if(stack.length < 1){
                        throw new Error();
                    }
                    stack.pop();
                }

                if (e === '+') {
                    if (stack.length < 2) {
                        throw new Error();
                    }
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(num1 + num2);
                }

                if (e === '-') {
                    if (stack.length < 2) {
                        throw new Error();
                    }
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    if (num1 - num2 < 0) {
                        throw new Error();
                    }
                    stack.push(num1 - num2);
                }
            }
        });
    }
    catch (err) {
        return -1;
    }
    return stack.length > 0 ? stack.pop() : -1;
}


console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'));
console.log(solution('5 6 + -'));
console.log(solution('3 DUP 5 - -'));
console.log(solution('-'));
console.log(solution('DUP'));
console.log(solution('POP'));
console.log(solution('POPafasdfasdfas'));