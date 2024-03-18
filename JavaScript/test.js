arr1 = [1,2,3,4]
function multiply(num)
{
    return num * 2
}



function choose(arr,func)
{
    return arr.map(func);
}

console.log(choose(arr1,multiply))