let sections = document.querySelectorAll("section")


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if(window.innerWidth<600){
            offset = sec.offsetTop-600;
        }else{
            offset = sec.offsetTop-200;
        }

        if(top>=offset && top < offset+height){
            sec.classList.add("show-animate");
        }else{
            sec.classList.remove("show-animate");
        }
    })
}