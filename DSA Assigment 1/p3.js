//Q3. Write a program to check if two strings are a rotation of each other?
const inp1='hello',inp2='olleh'
if(inp1.length==inp2.length){
    let i
    for(i=0;i<inp1.length;i++){
        if(inp1[i]!=inp2[inp2.length-1-i]){
            console.log('given two strings are a " NOT "  rotation of each other');
            break
        }
    }
    if(i==inp2.length){
        console.log('given two strings are THE rotation of each other');
    }
}
else{
    console.log('given two strings are a " NOT "  rotation of each other');
}