//throw error
try{
    throw "Error Occured"
}
catch(error){
    console.log(error);
}
//throw with errorinfo
try{
    throw{
        Id:100,
        message:'This ID id duplicate'
    }
}
catch(ex){
    console.log(ex)
}