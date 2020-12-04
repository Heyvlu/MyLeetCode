var calculate = function(s) {
    let arr=Array.from(s).reverse();
    let helper=(arr)=>{
        let stack=[];
        let sign="+";
        num=0;
        while(arr.length>0){
            let c=arr.pop();
            if(/\d+/.test(c)){
                num=num*10+(c-'0');
            }
            if(c=='('){
                num=helper(arr);
            }
            if((!/\d+/.test(c)&&c!==' ')||arr.length==0){
                if(sign=='+'){
                    stack.push(num);
                }else if(sign=='-'){
                    stack.push(-num);
                }
                sign=c;
                num=0;
            }
            if(c==')'){
                break;
            }
        }
        let res=0;
        while(stack.length!==0){
            res+=stack.pop();
        }
        return res;
    };
    return helper(arr);
};
console.log(calculate("(6+8)"));