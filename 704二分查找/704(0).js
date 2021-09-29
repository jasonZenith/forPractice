var search = function(nums, target) {
    if(nums.includes(target) === false){
        return -1
    }
    else{
        for(let i=0; i<nums.length; i++){
            if(nums[i] === target){
                return i
            }
        }
    }
};