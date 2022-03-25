import {Animations} from './animation.js'
import {Redirect} from './redirect.js'

window.onload=()=>{
    const animate= new Animations;
    const goTo= new Redirect;
    let selectedUser;

    $("#return").on("click", ()=>{
        goTo.mainMenu(location);
    })

    $(".user").on("click", (e)=>{
        if(selectedUser!=undefined){
            animate.removeBorder(selectedUser);
        }
        animate.createBorder(e.target);
        selectedUser=e.target;
    })
}