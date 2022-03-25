import {game} from './game.js'
import {Animations} from './animation.js'
import {Redirect} from './redirect.js'

window.onload=()=>{

    let hide=1;
    let esc=1;
    const animate = new Animations;
    const goTo = new Redirect;

    $("#bank").on('click', ()=>{
        animate.translate($("#betarea").css("transform"), $("#betarea")[0]);
    });

    document.body.addEventListener('keydown', (e)=>{
        if($("#menu").css("display")=="flex"){
            animate.keyDisappear($("#menu")[0], e.key, 'Escape');
        }
        else{
            animate.keyAppear($("#menu")[0], e.key, 'Escape', 'flex');
        }
        

    });
    
    $("#resume").on('click', (e)=>{
        animate.disappear($("#menu")[0]);
    })

    $("#return").on('click',()=>{
        goTo.mainMenu(location);
    })

    game(document);
}

