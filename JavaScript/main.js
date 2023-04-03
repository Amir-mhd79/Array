let data=["Bmw","Benz","Audi",220,240,230,11.1,12.8,14.6,true,null]
console.log(data);
let x=prompt("Enter Anything You Want")
for(let i=0;i<data.length;i++){
    data[i]+="...."+x
}
console.log(data);