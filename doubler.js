function doubler(arr){
    let result =[];
    for (let i=0;i<arr.length;i++){
        result.push(arr[i]*2);
    }
    return result;
}
let numbers=[1,2,3,4];
console.log(doubler(numbers));