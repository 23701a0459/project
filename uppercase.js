function shout(words) {
    let result=[];
    for(let i=0;i<words.length;i++){
        result.push(words[i].toUpperCase());
    }
    return result;
}
let list = ["hello","world","javascript"];
console.log(shout(list));