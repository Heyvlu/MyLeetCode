
    var twoSum = function(nums,target) {
        if(nums==[]){
            return false;
        }else{
            for(let i=0;i < nums.length; i++){
                for(let j=1;j < nums.length-1;j++){
                    if( nums[i]+nums[j]===target&&i!==j){
                        return([i,j]);
                    }
                }
            } 
        } 
    }
    console.log(twoSum([],10));