var pancakeSort = function(arr) {
    let res=[];
    let sort=(cakes,n)=>{
        if(n==1) return;
        let maxCake=0;
        let maxCakeIndex=0;
        for(let i=0;i<n;i++){
            if(cakes[i]>maxCake){
                maxCake=cakes[i];
                maxCakeIndex=i;
            }
        }
        reverse(cakes,0,maxCakeIndex);
        res.push(maxCakeIndex+1);
        reverse(cakes,0,n-1);
        res.push(n);
        sort(cakes,n-1);
    };
    let reverse=(arr,i,j)=>{
        while(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
        return arr;
    };
    sort(arr,arr.length);
    return res;
};
console.log(pancakeSort([3,2,4,1]));