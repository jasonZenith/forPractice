var reverse = function(x) {
    let res = '';
      let str = x+''
      if(x>0){
        for(var i = str.length-1;i>=0;i--){
          res+=str[i]
        }
      }else{
        for(var i = str.length-1;i>0;i--){
          res = res+str[i]
        }
        res = -res    
      }

      if(res<Math.pow(-2,31)||res>=Math.pow(2,31)-1){
        return 0
      }
      return res
};

