function prefixToInfix(prefix){
    let stack=[];
    for(let i=prefix.length-1;i>=0;i--){
        let char=prefix[i];
        if(isOperand(char)){
            stack.push(char);
        }
        else{
            let operand1=stack.pop();
            let operand2=stack.pop();
            let expression='('+operand1+char+operand2+')';
            stack.push(expression);
        }
    }
    return stack.pop();
    function isOperand(char){
        return char>='0'&&char<='9';
    }
}
const prefix='*+23/46';
console.log(prefixToInfix(prefix));
