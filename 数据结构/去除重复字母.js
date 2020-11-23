var removeDuplicateLetters = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(stack.indexOf(char)!==-1) continue;
        while(stack.length>0 && stack[stack.length-1]>char && s.indexOf(stack[stack.length-1],i)>i){
            stack.pop();
        }
        stack.push(char);
    }
    return stack.join('');
};
// 1. 维护一个栈stack，对字符串进行正序遍历
// 2. 对每个字符char，首先判断stack中是否存在，
// 2.1 若stack栈顶值比char大且后续还存在此值，则将栈顶弹出
// 3. 入栈每个char
// 4. 打印栈底到栈顶即为结果