function getUser(){
    return new Promise((resolve,object)=>{
        setTimeout(()=>{
            resolve({
                name:"Krish",
                role:'Developer'
            })
        },2000);
    });
}