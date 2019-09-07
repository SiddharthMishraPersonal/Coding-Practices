'use strict';

const fs = require('fs');
const lo = require('lodash');

/*
 * Complete the 'closestColor' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY pixels as parameter.
 */

function closestColor(pixels) {
    // Write your code here
    const results = [];

    pixels.forEach((e) => {
        let px1 = convertToDecimal(e.substring(0, 8));
        let px2 = convertToDecimal(e.substring(8, 16));
        let px3 = convertToDecimal(e.substring(16, 24));

        // console.log(`(${px1},${px2},${px3})`)

        const distanceBlack = getDistance(px1, px2, px3, [0, 0, 0]);
        const distanceWhite = getDistance(px1, px2, px3, [255, 255, 255]);
        const distanceRed = getDistance(px1, px2, px3, [255, 0, 0]);
        const distanceBlue = getDistance(px1, px2, px3, [0, 0, 255]);
        const distanceGreen = getDistance(px1, px2, px3, [0, 255, 0]);

        const distances = [distanceBlack, distanceWhite, distanceRed, distanceBlue, distanceGreen];
        results.push(getSmallestColor(distances))
    });
    return results;
}

function convertToDecimal(px) {
    // console.log(px);
    return parseInt(px, 2);
}

function getDistance(px1, px2, px3, color) {
    return Math.sqrt((px1 - color[0]) * (px1 - color[0]) + (px2 - color[1]) * (px2 - color[1]) + (px3 - color[2]) * (px3 - color[2]));
}

function getSmallestColor(distances) {
    // console.log(distances)
    const smallest = lo.min(distances);

    // console.log(smallest);
    if (getDuplicateValues(distances).length > 0) {
        return "Ambiguous";
    }

    const index = distances.indexOf(smallest);
    // console.log(index);
    switch (index) {
        case 0: return "Black";
        case 1: return "White";
        case 2: return "Red";
        case 3: return "Blue";
        case 4: return "Green";
    }
}

function getDuplicateValues(arrayObj) {
    return lo.filter(arrayObj, (val, i, iteratee) => lo.includes(iteratee, val, i + 1));
}

/**
 * Finds if Array has duplicate values.
 * @param {Array} arrayObj 
 * @param {number} item 
 */
function haveDuplicates(arrayObj, item) {
    console.log(lo.filter(arrayObj, (val, i, iteratee) => lo.includes(iteratee, val, i + 1)));

    let result = arrayObj.indexOf(item);
    if (result < 0) {
        return false;
    }

    for (let index = 0; index < arrayObj.length; index++) {
        let val = arrayObj.indexOf(item, index);
        if (val !== -1 && val > result) {
            return true;
        }
        result = val;
    }
}

function calculate() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const pixelsCount = parseInt(readLine().trim(), 10);

    // let pixels = [];

    // for (let i = 0; i < pixelsCount; i++) {
    //     const pixelsItem = readLine();
    //     pixels.push(pixelsItem);
    // }

    const pixels = [
        '101111010110011011100100',
        '110000010101011111101111',
        '100110101100111111101101',
        '010111011010010110000011',
        '000000001111111111111111'
    ];

    const result = closestColor(pixels);

    // ws.write(result.join('\n') + '\n');

    // ws.end();

    console.log(result.join('\n') + '\n');
}

calculate();
