var isValid = function(s) {
    let stack=[];
    for (const c of s) {
        if(c=='(' || c=='[' || c=='{'){
            stack.push(c)
        }else if(stack.length!==0 && leftOf(c)==stack[stack.length-1]){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length==0;
};
let leftOf=(c)=>{
    if(c==')'){
        return '(';
    }else if(c==']'){
        return '[';
    }
    return '{';
};