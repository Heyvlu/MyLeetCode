var calculate = function(s) {
    let arr=Array.from(s).reverse();
    let helper=(arr)=>{
        let stack=[];
        let sign="+";
        let num=0;
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
                }else if(sign=='*'){
                    pre=stack.pop();
                    stack.push(pre*num);
                }else if(sign=='/'){
                    pre=stack.pop();
                    stack.push(parseInt(pre/num));
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
console.log(calculate(" 3/2"));