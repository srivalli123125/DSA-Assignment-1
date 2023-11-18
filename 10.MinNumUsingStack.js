class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    findMin(){
        if(this.items.length===0){
            return "The stack is empty!";
        }
        return Math.min(...this.items);
    }
}
const stack=new Stack();
stack.push(5);
stack.push(2);
stack.push(9);
stack.push(1);
console.log("The smallest number in the stack is: "+stack.findMin());
