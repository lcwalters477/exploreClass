const list = [1, 3, 5, 4, 7, 6, 9, 100, 153, 167, 211];
anotherList = [1, 3, 5, 500];

//Here is the original function that will be called back
const myFunction = (list) => {
    let newList = [];
for(let i = 0; i < list.length; i ++){
    if(list[i] < 100){
        newList.push(list[i]);
    }
}
return newList;
}

//Here is the function that will callback the original function

function callback(list, myFunction){
    return myFunction(list);
}

//calling the callback function
const filtered = callback(anotherList, myFunction);

console.log(filtered);