function coutvowel(a){
b=["a","e","i","o","u","A","E","I","O","U"]
k=0
for(let i in a){
    
    for (let j in b){
        if (b[j]==a[i]){
            k=k+1
        }
    }
}
return k
}

s="kamlesh"
console.log(coutvowel(s))