function reverseString(str){
   let arr=str.split('')
    let i=0
    let j=str.length-1
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        console.log(arr,i,j);
        
        i++;
        j--
    }
    return arr.join('')
    // for(let char of str){
    //     stack.push(char)
    // }
    // while(stack.length){
    //    rev+=stack.pop()
    // }
    // return rev
let rev=''
    for(let i=str.length-1;i>0;i--){
rev+=str[i]
    }
}
console.log(reverseString('HIIu'));

