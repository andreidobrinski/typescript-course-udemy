"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if collection is an array of numbers
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    // TS gives an error message because it knows that 
                    // you can read but not write at collection[index]
                    // for a string
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
                // if collection is a string
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
