/**
 * @param {obj} loaded-DOM elements 
 * @param {DOM} clickShowHide-notification
 * @param {DOM} scrollSubHead - position fixed
 */

window.addEventListener('DOMContentLoaded', () => { 
    
    /**
     * @property.DOMElement  allelements-variable
     */
    const notiIcon = document.getElementById("subheader_drop_down");
    const showNoti = document.querySelector(".subheader_drop_down_menu");
    const body = document.body,
            user_name = document.querySelector(".subheader_user_name"),
            subheader = document.getElementById("subheader");
    

    //show hide - notification
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

    /**
     * @param user_firstLetter-toUpperCase...
     */
    user_name.innerHTML = user_name.innerHTML[0].toUpperCase() + user_name.innerHTML.slice(1);


    //scroll
    window.onscroll = function() {
        scrollSubHeader();
    };
    
    function scrollSubHeader() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            console.log(subheader);
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
});



