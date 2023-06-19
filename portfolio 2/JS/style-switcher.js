
let box = document.querySelector('.style-switcher-toggler');
box.addEventListener("click", () => {
    document.querySelector('.style-switcher').classList.toggle("open");
} )
// hide style switcher from scroll
window.addEventListener("scroll", ()=>{
    if( document.querySelector('.style-switcher').classList.toggle("open")){
        document.querySelector('.style-switcher').classList.remove("open")
    }
})


function darkTheme(){
    const body = document.body;
    body.classList.toggle("dark");
    
}

const alternateStyle = document.querySelector(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
         if(color === style.getAttribute("title"))
         {
            style.removeAttribute("disabled");
         }else{
            style.setAttribute("disabled","true");
         }         
    });
}

document.querySelectorAll('.colors .color').forEach(color =>{
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--skin-color', background);
    }
});