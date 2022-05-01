window.addEventListener('DOMContentLoaded', () => { 
    const notiIcon = document.getElementById("subheader_drop_down");
    const showNoti = document.querySelector(".subheader_drop_down_menu");
    const body = document.body;

    //console.log(notiIcon, showNoti);
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
});



