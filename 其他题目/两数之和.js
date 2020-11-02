
    var twoSum = function(nums,target) {
        if(nums==[]){
            return false;
        }else{
            for(let i=0;i < nums.length; i++){
                for(let j=0;j < nums.length;j++){
                    if( nums[i]+nums[j]===target&&i!==j){
                        return([i,j]);
                    }
                }
            } 
        } 
    };
    console.log(twoSum([3,3],6));