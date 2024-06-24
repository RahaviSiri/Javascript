//Foreach
arr = ['deepa','suresh','ramya']

arr.forEach(print)
function print(val){
    console.log(val.toUpperCase())
}
console.log(arr)
//arr.forEach(val => console.log(val.toUpperCase()))


arr.forEach(toUpper);

function toUpper(val,index,arr){
    arr[index] = val.toUpperCase();
}
console.log(arr)

// arr.forEach((val,index,arr)=>{
//     arr[index] = val.toUpperCase()
// })


arr = ['ECE', 'IT', 'CSE', 'EEE']

arr.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
});
