'use strict';

const mathLib = {

    // Map a number from one range to another
    // let output = mapRange(4, 0, 10, 0, 100);    // -> 40
    mapRange(num, inMin, inMax, outMin, outMax) {
        return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },

    // Clamp a number within a given range
    clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    },

    createNumber(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    },

    createArray(num, min, max){
        return [...new Array(num)].map(() => mathLib.createNumber(min,max));
    },

}

export default mathLib;