

 window.addEventListener('DOMContentLoaded', () => { 

    //tiny slide modified
   const btnPrev= document.querySelector('[data-controls = "prev"]'),
            btnNext = document.querySelector('[data-controls = "next"]'),
            tns_navs = document.querySelectorAll("[data-nav]"),
            label_form=document.querySelectorAll("label"),
            form = document.getElementById("add_form"), 
            inputs = form.querySelectorAll("input");
    
    
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


    //label form
    try {

        // label_form.forEach(label => {
        //     let input_box= document.createElement("div");
        //     input_box.setAttribute("class", "inputbox");
        //     input_box.append(label);
        //     form.append(input_box);
        // });
        
        
        inputs.forEach((input, i) => {
            let input_box= document.createElement("div");
            input_box.setAttribute("class", "inputbox");


            
            input_box.append(input);
            
            if(input.getAttribute("name") != "csrfmiddlewaretoken") {
                if(label_form[i] == undefined) {
                    input.after(label_form[0]);
                }else {
                    input.after(label_form[i]);
                }
                console.log(input);
            }

            form.append(input_box);
        });

    }catch {
        ;
    }
});



