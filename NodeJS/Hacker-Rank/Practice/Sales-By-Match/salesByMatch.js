'use strict';


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let items = {};
    ar.forEach((item)=>{
        if(!items[item]){
            items[item]=1;
        } else {
            items[item]++
        }
    });

    let keys = Object.keys(items)
    let result = 0
    keys.forEach((item)=>{
        let pairs = Math.trunc(items[item] / 2)
        result += pairs;
    })

    return result;
}

function main() {
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    let result = sockMerchant(ar.length, ar);
    console.log(result);

    ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    result = sockMerchant(ar.length, ar);
    console.log(result);
}

main();