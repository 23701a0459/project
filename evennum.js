function evennumberpicker(arr) {
    return arr.filter(function(num){
        return num%2==0;
    });
}
let numbers=[1,2,3,4,5,6,7,8,9];
let evennumbers= 
evennumberpicker(numbers);
console.log(evennumbers);
