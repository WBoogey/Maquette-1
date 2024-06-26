const Hamburger = document.querySelector(".hamburger")

const NavLinks = document.querySelector(".navlinks")


const Toggle = () =>{
    NavLinks.classList.toggle('open')
    if(NavLinks.classList.contains('open')){
        document.querySelector(".hamburger .material-symbols-outlined").innerHTML= "close"
    }else{
        document.querySelector(".hamburger .material-symbols-outlined").innerHTML= "menu"
    }
}

Hamburger.addEventListener("click", Toggle)

Yvannportfolio