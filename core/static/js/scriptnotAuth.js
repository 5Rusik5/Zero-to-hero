

 window.addEventListener('DOMContentLoaded', () => { 

    //tiny slide modified
   const btnPrev= document.querySelector('[data-controls = "prev"]'),
            btnNext = document.querySelector('[data-controls = "next"]'),
            tns_navs = document.querySelectorAll("[data-nav]");
    
    
    try {
        
        tns_navs.forEach(item => {
            item.classList.add("tns_nav_all");
        });
    
        btnPrev.innerHTML= "";
        btnNext.innerHTML = "";
    
        let iconNext = document.createElement("i"), 
            iconPrev = document.createElement("i");
        iconNext.setAttribute("class", "fa-solid fa-caret-right");
        iconPrev.setAttribute("class", "fa-solid fa-caret-left");
    
        btnNext.append(iconNext);
        btnPrev.append(iconPrev);
    
        btnNext.classList.add("btnNext");
        btnPrev.classList.add("btnNext");
    }catch(e) {
        console.log("Plase sign in", e.message);
    }
});



