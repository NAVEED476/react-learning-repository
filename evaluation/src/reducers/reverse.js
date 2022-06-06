

function revere_number(num,res=0){
    if(num){
        return revere_number(Math.floor(num/10),(res*10)+(num%10))
    }
    return res
}
console.log(revere_number(1234));
