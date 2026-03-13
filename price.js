function pricetagger(prices) {
    let result =[];
    for (let i=0;i<prices.length;i++){
        result.push("$"+prices[i]);
    }
    return result;
}
let numbers=[10,20,30,40,50];
console.log(pricetagger(numbers));