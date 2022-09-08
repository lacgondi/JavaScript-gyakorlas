var arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(Math.round((Math.random() * 100) + 1, 0),);
}
arr.sort(function(a, b){
    return a - b;
});
arr.forEach(element => {
   console.log(element); 
});
