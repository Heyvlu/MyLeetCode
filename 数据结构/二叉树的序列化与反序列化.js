var serialize = function(root) {
    if(root==null) return "[]";
    let SEP=",";
    let NULL="#";
    let sb="";
    let xuliehua=(root,sb)=>{
        if(root==null){
            return sb=sb+NULL+SEP;
        }
        sb=sb+root.val+SEP;
        xuliehua(root.left,sb);
        xuliehua(root.right,sb);
        return sb;
    }
    xuliehua(root,sb);
};


var deserialize = function(data) {
    let arr=data.split(",");
    if(!arr.length) return null;
    let build=(arr)=>{
    let first=arr.shift();
    if(first=="#") return null;
    let root=new TreeNode(first);
    root.left=build(arr);
    root.right=build(arr);
    return root;
    };
    return build(arr);
};