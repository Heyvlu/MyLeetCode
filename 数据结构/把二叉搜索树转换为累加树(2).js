var convertBST = function(root) {
    let sum=0;
    let traverse=(root)=>{
        if(root==null){
            return;
        }
        traverse(root.right);
        sum+=root.val;
        root.val=sum;
        traverse(root.left);
    };
    traverse(root);
    return root;
};