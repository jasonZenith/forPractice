/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // 暴力破解法
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target && i!=j){
//                 return [i,j]
//             }
//         }
//     }
// };


// 静态哈希表
var twoSum = function(nums, target) {
    const hashmap = new Map();
    for(let i=0;i<nums.length;i++){
        hashmap.set(nums[i], i);
    }
    for(let j=0;j<nums.length;j++){
        const dif = target - nums[j];
        if(hashmap.has(dif)&&hashmap.get(dif)!=j){
            return [j,hashmap.get(dif)];
        }
    }
}


// 动态哈希表
// var twoSum = function(nums, target) {
//     const hashmap = new Map();
//     for(let i=0;i<nums.length;i++){
//         const num1 = nums[i];
//         const num2 = target - num1;
//         if(hashmap.has(num2)){
//             return [hashmap.get(num2), i];
//         }else{
//             hashmap.set(num1,i);
//         }
//     }
// }