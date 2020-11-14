var strStr = function(haystack, needle) {
    if(!needle) return 0;
    let hlen=haystack.length,
    nlen=needle.length;
    for(let i=0;i<hlen-nlen+1;i++){
        if(haystack.substring(i,i+nlen)==needle){
            return i;
        }
    }
    return -1;
};
console.log(strStr( "hello","lo"));