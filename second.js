var cats = [];
for (let index = 1; index <= 20; index++) {
    var obj = {
        name: "Cirmos"+index,
        age: Math.round((Math.random()*10)+2,2)
    };
    cats.push(obj); 
}

let youngCounter = 0;
for (let index = 0; index < cats.length; index++) {

    if(cats[index].age === 2){
        console.log(cats[index].name+" "+cats[index].age+" éves");
        youngCounter++;
    }
}

if(youngCounter == 0){
    console.log("Nincs 2 éves macska")
}