function isOperator(x){
    switch(x){
        case'+':
        case'-':
        case'/':
        case'*':
        return true;
    }
    return false;
}
function postToPre(post_exp){
    let stack=[];
    for(let i=0;i<post_exp.length;i++){
        let symbol=post_exp[i];
        if(isOperator(symbol)){
            let op1=stack[stack.length-1];
            stack.pop();
            let op2=stack[stack.length-1];
            stack.pop();
            let temp=symbol+op2+op1;
            stack.push(temp);    
        }
        else{
            stack.push(symbol);
        }
    }
    return stack[stack.length-1];
}
let post_exp="AB+CD-*";
console.log("Prefix: "+postToPre(post_exp));
