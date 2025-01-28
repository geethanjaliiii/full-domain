// qn:apple
// ans:a-pp-ppp-llll-eeeee-

function conv(str){
    let res=''
    for(let i=0;i<str.length;i++){
           for(let j=0;j<=i;j++){
            res+=str[i]
           }
           res+='-'
    }
    return res
}
console.log(conv('apple'));
