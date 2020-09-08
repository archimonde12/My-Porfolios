const   deg=6,
        hr=document.querySelector('#hr'),
        min=document.querySelector('#min'),
        sec=document.querySelector('#sec'),
        body=document.querySelector('body');

setInterval(()=>{
    let day=new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg`
    min.style.transform = `rotateZ(${mm}deg`
    sec.style.transform = `rotateZ(${ss}deg`
})

// Toggle Function
function ToggleTheme(){
    body.classList.toggle("light")
}
