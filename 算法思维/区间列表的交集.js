var intervalIntersection = function(A, B) {
    let i=0;
    let j=0;
    let res=[];
    while(i<A.length && j<B.length){
        const start=Math.max(A[i][0],B[j][0]);
        const end=Math.min(A[i][1],B[j][1]);
        if(start<=end){
            res.push([start,end]);
        }
        if(A[i][1]<B[j][1]){
            i++;
        }else{
            j++;
        }
    }
    return res;
};
console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]));