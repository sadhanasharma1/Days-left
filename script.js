
//to implement into the website:
const daysEl= document.getElementById("days");



const myBrth = "14 October 2023";


function left(){
    const myBrthDate = new Date(myBrth);
    const currentDate = new Date();
    const totalSeconds =(myBrthDate - currentDate) / 1000;
    const days=Math.floor(totalSeconds / 3600 /24);
    daysEl.innerHTML= days;


}

left();
