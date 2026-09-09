let obj={
    name:"Dipanshu",
    age:22,
    phone:1234567890,
    Address:"Delhi"
}

for (let key in obj) {
    console.log(key + " : " + obj[key]);
}
for( const key in obj){
    const element = obj[key];
    console.log(element)
}

let i=0;
while(i<5){
    console.log(i);
    i++;
}
