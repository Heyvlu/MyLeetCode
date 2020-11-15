var kthSmallest = function(root, k) {
    root=new TreeNode();
    let res=0;
    let rank=0;
    let traverse=(root,k)=>{
        if(root==null){
            return;
        }
        //中序遍历二叉搜索树
        let root_left=traverse(root.left,k);
        rank++;
        if(k===rank){
            res=root.val;
            return;
        }
        let root_right=traverse(root.right,k);
    };
    traverse(root,k);
    return res;
};