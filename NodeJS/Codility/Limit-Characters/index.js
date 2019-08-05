function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!message){
        return 'd';
    }

    console.log(message.length);
    
    if( K < 0 || K > 500 || message.length <= 0 || message.length === K){
        return message;
    }
    
    const words = message.trim().split(' ');
    const wordCharCounts = {};
    let sum = 0;
    
    words.forEach(e=>{
        if(sum > 0){
            sum++;
        }
        
        if(e.trim().length > 0 && sum + e.length <= K  && e.length <= K){
            sum += e.length;
            wordCharCounts[e] = e.length;
        }
    });
    
    let result = '';
    Object.keys(wordCharCounts).forEach(e=>{
        if(result.length === 0){
            result = e;
        }
        else
        {
          result += ' ' + e;
        }
    });
    return result;
    
}

// console.log(solution('Siddharth Mishra', 0));
// console.log(solution('Siddharth Mishra', 501));
// console.log(solution('Siddharth Mishra', 5));
// console.log(solution('Siddharth Mishra', 9));
// console.log(solution('Siddharth Mishra', 14));
// console.log(solution('Siddharth Mishra', 16));
// console.log(solution('Siddharth Mishra', 167));
// console.log(solution('The quick brown fox jumps over the lazy dog', 15));
console.log(solution('ThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogTh equickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthela', 500));
console.log(solution('ThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelaThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthelazydogThequickbrownfoxjumpsoverthela', 700));
// console.log(solution('Codility We test coders', 14));