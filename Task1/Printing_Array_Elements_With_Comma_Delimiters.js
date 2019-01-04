var array = [2,4,5,2];
function printArray(array){
var result=" ";
    for(i=0; i<array.length; i++){
        result=result + array[i];
        if(i!=array.length-1){
            result = result +',';
        }
    }
    console.log(result);
    return result;
// return array.join(',');
}

c = printArray(array);
console.log(c);
