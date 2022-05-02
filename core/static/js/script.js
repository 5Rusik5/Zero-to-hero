import { tns } from "./../../../node_modules/tiny-slider/src/tiny-slider";
/**
 * @param {obj} loaded-DOM elements 
 * @param {DOM} clickShowHide-notification
 * @param {DOM} scrollSubHead - position fixed
 * @param {slide} slider- with npm package tiny slider ❤
 */

window.addEventListener('DOMContentLoaded', () => { 
    
    /**
     * @property.DOMElement  allelements-variable
     */
    const notiIcon = document.getElementById("subheader_drop_down");
    const showNoti = document.querySelector(".subheader_drop_down_menu");
    const body = document.body,
            user_name = document.querySelector(".subheader_user_name"),
            subheader = document.getElementById("subheader"), 
            numberic_post = document.querySelectorAll(".popular_post_number");

            
    //slide 
    try {

        tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            autoplay: true,
        });
    }catch(e) {
        console.log(e);
    }
            
         

    //show hide - notification
    try {

        body.addEventListener("click", (event) => {
            let target = event.target;
    
            if(target === notiIcon) {
                showNoti.classList.add("subheader_show");
            }else {
                showNoti.classList.remove("subheader_show");
            }
        });
    
        notiIcon.addEventListener("click", () => {
            if(!showNoti.classList.contains("subheader_show")) {
                showNoti.classList.add("subheader_show");
            }else {
                showNoti.classList.remove("subheader_show");
            }
        });
    }catch(e) {
        console.log("Plase sign in", e.message);
    }

    /**
     * @param user_firstLetter-toUpperCase...
     */
    user_name.innerHTML = user_name.innerHTML[0].toUpperCase() + user_name.innerHTML.slice(1);


    //scroll
    window.onscroll = function() {
        scrollSubHeader();
    };
    
    function scrollSubHeader() {
        if(body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            subheader.classList.add("navBar");
            subheader.style.position = `fixed`;
            subheader.style.paddingTop = "30px";
            subheader.style.verticalAlign = "top";
            subheader.style.transition = "0.3s all ease";
        }else {
            subheader.style.position = `relative`;
            subheader.className = subheader.className.replace("navBar", "subheader");
        }
    }


    //numberic posts
    let count = 0;
    numberic_post.forEach((posts, n) => {
        count++;
        if(count < 10) {
            posts.innerHTML = `0${count}`;
        }else {
            posts.innerHTML = `${count}`;
        }
    })
});



