function areBracketsClosed(code){
    let stack=[];
    for(let i=0;i<code.length;i++){
        let char=code[i];
        if(char==='('||char==='['||char==='{'){
            stack.push(char);
        }
        else if(char===')'||char===']'||char==='}'){
            if(stack.length===0||!isMatchingBracket(stack.pop(),char)){
                return false;
            }
        }
    }
    return stack.length===0;
}
function isMatchingBracket(opening,closing){
    return (
        (opening==='('&&closing===')')||(opening==='['&&closing===']')||(opening==='{'&&closing==='}')
    );
}
const codeSnippet='function greet(name){if(name){console.log("Hello, "+name);}}';
console.log(areBracketsClosed(codeSnippet));
