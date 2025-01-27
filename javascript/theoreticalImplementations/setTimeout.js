const timer =function(){
    for(var i=0;i<5;i++){
        console.log('hii');
        
        setTimeout(()=>
        console.log(i),i*1000
        )
        
    }
    console.log("halo anju");
    
}
timer()