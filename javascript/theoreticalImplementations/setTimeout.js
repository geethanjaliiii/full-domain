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

const name={
    fname:'Geetha',
    lname:"S",
    prtintFullName:function(){console.log(`${this.fname} ${this.lname}`)}
    
}

const name1={
    fname:'Geethajali',
    lname:"S",
    
}

// name.prtintFullName.call(name1)


function printDetails(hometown){
    console.log(`${this.fname} ${this.lname} from ${hometown}`);
    
}
printDetails.call(name1,'Kattappana')