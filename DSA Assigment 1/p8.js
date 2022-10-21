//Q8. Write a program to check if all the brackets are closed in a given code snippet.
const checkPair=(a,b)=>{
    if(b==')'){
        return (a=='(')?true:false
    }
    if(b=='}'){
        return (a=='{')?true:false
    }
    if(b==']'){
        return (a=='[')?true:false
    }
}
const checkBrackets=str=>{
    let store=[];
    for(let i of str.split('')){
        // console.clear()
        console.log(' i ->',i);
        if('({['.includes(i)){
            store.push(i)
        }
        else{
            if(')}]'.includes(i)){
                if(store.length==0){
                    console.log('Not Balanced');return;
                }
                if(checkPair(store[store.length-1],i)){
                    store.pop();
                }
                else{
                    console.log('\nNot Balanced');return;
                }
            }
        }
        console.log(' store -> ',...store);
    }
    if(store.length==0){
        console.log('Balenced');
    }else{
        console.log('NOT Balanced');
    }
}
checkBrackets('{()}[([])]')