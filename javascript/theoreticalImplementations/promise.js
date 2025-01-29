
// //create orderApi
// createOrder(cart,function (orderId){
//     proceedToPayment(orderId,function (info){
//         orderSummary(info,()=>{
//             updateWallet()//all these are some function that will return some values, but we are nit sure
//         })
//     })
// } )

function fetchData(){
    return new Promise((resolve,reject)=>
    {let success=true;
     setTimeout(()=>{   if(success){
        resolve('data fetched')
    }else{
        reject('Failed to fetch')
    }},2000)
})
}
const users=fetchData()
users.then(function(data){
    return data
}
).then((data)=>console.log(data)
).catch((err)=>console.log(err)
)
//console.log(users);
