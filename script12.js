let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('vb');
let a4 = document.getElementById('vs');
let today;
let diff;
let sec;
let min;
let hours;
let days;
let future;
let ever = document.getElementById('evedate')
let button = document.getElementById('submit')
if(ever.value == ''){
    
    button.disabled = true;

}

fieldcheck = ()=>{
    console.log("hjhj")
    if (ever.valueAsDate != '' && ever.valueAsDate > new Date()){
        button.disabled = false;        
    }
}
eveclicked = ()=>{
future = document.getElementById('evedate').valueAsDate;
setInterval(() => {    
    today = new Date();
    diff = future-today;
    sec = Math.floor(diff/1000);
    min = Math.floor(sec/60);
    hours = Math.floor(min/60)
    days = Math.floor(hours/24);    
    sec = sec%60;
    min = min%60;
    hours = hours%24;
    a1.innerText = days;
    a2.innerText = hours;
    a3.innerText = min;
    a4.innerText = sec;
}, 500);
}