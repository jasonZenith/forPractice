const temp = {
  name: "jason",
  age: 21,
  height:{
    msg: 183
  }
}

// shallowCopy
function shallowCopy(obj){
  const newObj = {};
  for(let i in obj){
    newObj[i] = obj[i]
  }
  return newObj
}

// deepCopy
function deepCopy(obj){
  const newObj = {};
  for(let i in obj){
    if(obj[i] instanceof Object){
      newObj[i] = deepCopy(obj[i])
    }else{
      newObj[i] = obj[i]
    }
  }
  return newObj
}

let i = shallowCopy(temp)
let i1 = deepCopy(temp)
temp.age = 22
temp.height.msg = 185
console.log(i)  // 浅
console.log(i1) // 深
