function countWords(str) {
let len = str.split(' ').filter(a => a.trim().length > 0).length;
return len;
}
// function countWords(str) {
//     var totalSoFar = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             totalSoFar += 1;
//         }
//     }
//     return totalSoFar + 1; // you need to return something.
// }
// console.log(countWords("Random String"));
