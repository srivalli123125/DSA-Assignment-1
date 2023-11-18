function Stack(){
    this.stack=[];
    this.push=function(x){
        this.stack.push(x);
    }
    this.pop=function(){
        if(this.stack.length===0) return "Stack is empty";
        return this.stack.pop();
    }
    this.isEmpty=function(){
        return this.stack.length===0;
    }
    this.reverse=function(){
        if(!this.isEmpty()){
            let temp=this.pop();
            this.reverse();
            this.inserAtBottom(temp);
        }
    }
    this.inserAtBottom=function(item){
        if(this.isEmpty()){
            this.push(item);
        }
        else{
            let temp=this.pop();
            this.inserAtBottom(item);
            this.push(temp);
        }
    }
}
let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Original Stack: "+stack.stack);
stack.reverse();
console.log("Reversed Stack: "+stack.stack);
