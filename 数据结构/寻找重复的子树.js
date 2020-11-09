var findDuplicateSubtrees = function(root) {
    const map=new Map();
    const res=[];
    const recursion=(root)=>{
        if(!root){
            return "#";
        }
        let left=recursion(root.left);
        let right=recursion(root.right);
        const key=left+","+right+","+root.val;
        if(!map.has(key)){
            map.set(key,1);
        }else{
            map.set(key,map.get(key)+1);
        }
        if(map.get(key)==2){
            res.push(root);
        }
        return key;
    }
    recursion(root);
    return res;
};