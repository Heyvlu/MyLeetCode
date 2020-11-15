var countNodes = function(root) {
    let l=root,r=root;
    let hl=hr=0;
    while(l!==null){
        l=l.left;
        hl++;
    }
    while(r!==null){
        r=r.right;
        hr++;
    }
    if(hl==hr){
        return Math.pow(2,hl)-1;
    }
    return 1+countNodes(root.left)+countNodes(root.right);
};