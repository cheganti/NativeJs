//**************************************************************************
    // var arr = [2,5,4,9];
    // console.log("Element index is " +arr.find(ele => ele> 5));
//**************************************************************************
    // var arr = [2,5,4,9];
    // var  ss = arr.findIndex(function(ele){
    //     if(ele > 5){
    //         console.log(ele);
    //         return ele;
    //     }
    // })
    // console.log("Returned element is "+ss);
//**************************************************************************
    // var arr = [2,5,4,9,23];
    // var cc = arr.find(ele=> {
    //     if(ele>9){
    //         console.log("Element > 9 is " + ele)
    //         return ele;
    //     }
    //     return false;
    // });
    // console.log(cc);
//**************************************************************************
    // var m = new Map();
    // m.set(1,"sri");
    // m.set(2,"ravi");
    // console.log(m.get(1));
    // const items = ['a', 'b', 'c'];
    // const newArray = items.map((item) => item = item+"2")
    // console.log(newArray.find(x=> x == "a2"));
    // console.log(newArray);
    // console.log(items.sort((a,b)=> a+b));
//**************************************************************************
    // function Rectangle(x, y,z) {
    //         this.x = x;
    //         this.y = y;
    //         this.perimeter = function(){
    //             return 2 * (this.x + this.y )
    //         }
    //     }
    //             //------------
    //                 // Rectangle.prototype.z = z;
    //                 // Rectangle.prototype.perimeter = function() {
    //                 //    return 2 * (this.x + this.y);
    //                 // }
    //             //------------
    //     var rect = new Rectangle(4, 2,3);
    //     console.log(rect.perimeter()); // outputs '12'
//************************************************************************** 
    //     var a =[8,9,6,4,7];
    //     function aa(){
    //         var d = [];
    //         for(let i=a.length-1; i>=0; i--){
    //            d.push(a[i]);
    //         }
    //         return d;
    //     // console.log(d);
    //     }
    //    var c = aa();
    //    console.log(c);
//**************************************************************************
    //  var a = [3,5,8,9];
    // function reverseArr() {
    //      var ret = new Array;
    //     for(var i = a.length-1; i >= 0; i--) {
    //         ret.push(a[i]);
    //     }
    //     return ret;
    // }
    // var b = reverseArr();
    // console.log(b);
//************************************************************************** 
    // function printArray(data){
    //     var ret= new Array();
    //     for(i=data.length-1; i>=0; i--)
    //       {
    //      // console.log(data[i]);
    //       ret.push(data[i]);
    //       }
    //       return ret;
    //     }
    //     var data = [2,4,5,6]
    //     var retArray= printArray(data);
    //     console.log(retArray);
//************************************************************************** 
    // const array = [1,2,3,4,5,6,"taco"];
    // function reverse(array){
    //   return array.map((item,idx) => array[array.length-1-idx])
    // }
    // var k = reverse(array);
    // console.log(k);
    // var array = [2,8,9];
    // function arr(){
    //     var retarr = new Array;
    //     for(i = array.length-1; i >=0; i--){
    //         retarr.push(array[i]);
    //     }
    //     return retarr;
    // }
    //************************************************************************** 
    // function iqTest(i){
    //     if(i%2==0){
    //       return true;  
    //     }
    //     return false;
    //   }
    //   var iqTestfn = iqTest(3);
    //   console.log(iqTestfn);

    // function iqTest(numbers,k){
    //     var res = numbers.split(" "); 
    //     var resT = new Array();
    //     //console.log(res);
    //     for(i = 0; i < res.lengnth; i++){
    //         console.log(res[i]);
    //         resT.push(res[i]);
    //         // if(res[i] % k == 0){
    //         //     console.log(res[i] + " :is even number");
    //         // }
    //         // else{
    //         //     console.log(res[i] + " :is odd number");
    //         // }
    //         // return res;
    //     }
    //     return res;
    //     }
    //      var test = iqTest("2 4 7 8 10",3)
    //     console.log(test);


    //---------------------------
//************************************************************************** 
//     var a=[1,2,3,4]
//     function printArray(){
//     var result=" ";
//     for(i=0; i<a.length; i++){
//         result=a[i]+result;
//         console.log(result);
//     }
//     return result;
// }
// console.log(printArray());
//************************************************************************** 
    //calculating-with-functions
        // function zero() {
        //     return recur(0, op);
        // }
        // function one() { return 1; }
        // function two() { return 2; }
        // function three() { return 3; }
        // function four(fr) { return fr + 4; }
        // function five() { return 5; }
        // function six(si) { return 6 / si; }
        // function seven(b) { return b * 7; }
        // function eight(ei) { return 8 - ei; }
        // function nine() { return 9; }
        // function plus(p) { return p; }
        // function minus(mi) { return mi; }
        // function times(a) { return a; }
        // function dividedBy(di) { return di; }
    // Test.assertEquals(seven(times(five())), 35);
    // Test.assertEquals(four(plus(nine())), 13);
    // Test.assertEquals(eight(minus(three())), 5);
    // Test.assertEquals(six(dividedBy(two())), 3);
    //**************************************************************************
    //Get-the-middle-character
    // function extractMiddle(str) {
    //     var position;
    //     var length;
    //     console.log(str.length);
    //     if (str.length % 2 == 1) {
    //         position = str.length / 2;
    //         length = 1;
    //     } else {
    //         position = str.length / 2 - 1;
    //         length = 2;
    //     }
    //     return str.substring(position, position + length)
    // }
    // console.log(extractMiddle("ravicheg"));
    //**************************************************************************