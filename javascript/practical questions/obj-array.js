const product = [{a:3},{a:3},{a:3},{a:33}]
// Q: Find the Sum
let sum=0
let arr=[]
for(let obj of product){
sum+=Number(obj.a)
     
}
console.log(sum);
const ab = [{af:[3,34,33]},{af:[3,34,33]},{af:[3,34,33]},{af:[3,34,33,-92]}]
const summ=ab.reduce((acc,curr)=>acc+=curr.af,0);
console.log(summ);
let array=ab.map(item=>item.af).flat(1).reduce((acc,curr)=>acc+=curr,0)
let hi=ab.flatMap(obj=>obj.af)
console.log(hi);
