var twoSum = function(nums, target) {
    let hashMap={};
    for(let i=0;i<nums.length;i++){
        let num=target-nums[i];
        let index=hashMap[num];
        if(index!==undefined){
            return[index,i];
        }else{
            hashMap[nums[i]]=i;
        }
    }
};
// 用 hashMap 存储遍历过的元素和对应的索引。
// 每遍历一个元素，看看 hashMap 中是否存在满足要求的目标数字。
// 所有事情在一次遍历中完成（用了空间换取时间）。