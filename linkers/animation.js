
export class Animations{
    translate(transfr, hidearea){
        if(transfr=="matrix(1, 0, 0, 1, 0, 205)"){
            hidearea.style.transform="translateY(0px)"
    
        }else{
            hidearea.style.transform="translateY(205px)"    
        }
    }
    
    keyAppear(div, pressed, key, display){
        if(pressed==key){
            div.style.display=display
        }
    }

    keyDisappear(div, pressed, key){
        if(pressed==key){
        div.style.display="none"
        }
    }

    appear(div, display){
        div.style.display=display;
    }

    disappear(div){
        div.style.display="none";
    }

    createBorder(div){
        div.style.border="4px ridge grey"
    }

    removeBorder(div){
        div.style.border="none"
    }
}

