function findFirstNonRepeatedChar(str){
    let charCount=[];
    for(let char of str){
        charCount[char]=(charCount[char] || 0)+1;
    }
    for(let char of str){
        if(charCount[char]===1){
            return char;
        }
    }
    return null;
}
const str="Srivalli";
const FirstNonRepeatedChar=findFirstNonRepeatedChar(str);
console.log(FirstNonRepeatedChar);
