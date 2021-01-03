class Menu {
    constructor(){
        this.element = document.querySelector(".menu");
        this.setUpEvents();
    }
    setUpEvents(){
        this.element.addEventListener("click",this.slide);
        window.addEventListener("scroll",this.remove)
    }
    slide = e => {
        e.preventDefault();
        document.querySelector(".list-wrapper").classList.toggle("open");
    }
    remove = e =>{
        document.querySelector(".list-wrapper").classList.remove("open");
    }
}

export default Menu;