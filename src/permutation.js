var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function permutation(pick, max, usePermutation) {
    pick = Math.floor(pick);
    max = Math.floor(max);
    if (pick > max)
        return console.error("Pick cannot be greater than max.");
    if (pick <= 0)
        return console.error("Pick must be 1 or more.");
    if (max <= 0)
        return console.error("Max must be 1 or more.");
    var i = new Array(pick);
    loop(i, pick, max, 0, usePermutation);
}
function loop(indices, pick, max, count, usePermutation) {
    for (indices[count] = 0; indices[count] < max; indices[count]++) {
        if (checkOverlap(indices, count)) {
            if (count < pick - 1)
                loop(indices, pick, max, count + 1, usePermutation);
            if (count === pick - 1)
                usePermutation(indices);
        }
    }
}
function checkOverlap(indices, count) {
    if (count <= 0)
        return true;
    if (indices.length <= count)
        return false;
    for (var i = 0; i < count; i++)
        if (indices[count] === indices[i])
            return false;
    return true;
}
function counter() {
    var countPerm = 0;
    return function showIndices(indices) {
        countPerm++;
        console.log.apply(console, __spreadArray([countPerm], indices, false));
    };
}
var myShowIndices = counter();
// permutation(8, 8, myShowIndices);
permutation(5, 10, myShowIndices);
