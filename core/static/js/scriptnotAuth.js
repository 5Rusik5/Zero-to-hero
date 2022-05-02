/**
 * @param not_auth - if user noy authenticate
 * @param {obj} loaded-DOM elements 
 * @param {DOM} scrollSubHead - position fixed
 */

 window.addEventListener('DOMContentLoaded', () => { 
    
    /**
     * @property.DOMElement  allelements-variable
     */
    const subheader = document.getElementById("subheader");

    //scroll
    window.onscroll = function() {
        scrollSubHeader();
    };
    
    function scrollSubHeader() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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



