let minSubArrayLen = (target, nums) => {
    let subArr = [];
    let count = 0
    for(let i=0; i<nums.length; i++){
        count += nums[i]
        if(count<target){
            return 0;
        }
    }
};