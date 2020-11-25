var corpFlightBookings = function(bookings, n) {
    // 差分数组
    if(n==0) return[];
    let nums=new Array(n).fill(0);
    let diff=new Array(nums.length);
    let difference=(nums)=>{
        diff[0]=nums[0];
        for(let i=1;i<nums.length;i++){
            diff[i]=nums[i]-nums[i-1];
        }
        return diff;
    }
    let increment=(i,j,val)=>{
        diff[i]+=val;
        if(j+1<nums.length){
            diff[j+1]-=val;
        }
        return diff;
    }
    let result=(diff)=>{
        let res=[];
        res[0]=diff[0];
        for(let i=1;i<nums.length;i++){
            res[i]=res[i-1]+diff[i];
        }
        return res;
    }
    difference(nums);
    for (const booking of bookings) {
        let i=booking[0]-1;
        let j=booking[1]-1;
        let val=booking[2];
        increment(i,j,val);
    }
    return result(diff);
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5));