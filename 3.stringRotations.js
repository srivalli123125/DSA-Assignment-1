function areStringRotations(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let combinnedStr=str1+str1;
    if(combinnedStr.includes(str2)){
        return true;
    }
    else{
        return false;
    }
}
let string1="hello";
let string2="llohe";
let result=areStringRotations(string1,string2);;
console.log(result);
