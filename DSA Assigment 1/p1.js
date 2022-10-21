console.clear()
// 1 Write a program to find all pairs of an integer array whose sum is equal to a given number?

const input=[1,2,3,4,3,5,2,6,5,7,3,9,0,8,2],target=9
let result=[]
for(let i of [...new Set(input)]){
    if(i<=target){
        if(input.includes(target-i)){
            result.push([i,target-i])
        }
    }
}
console.log(...result);


