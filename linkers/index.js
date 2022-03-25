window.onload=()=>{
    let newgame = document.getElementById('newgame');
    let chips=document.getElementById('chips');

    newgame.addEventListener("click", ()=>{
        
        // if(userloaded){
        //     if(chips==0){
        //         window.alert('No Chips!')
        //     }
        //     else{
        //         location.href="./views/game.html"
        //     }  
        // }
        // else{
        //     create new user
        //     give chips (reset)
        // }

        if(chips==0){
            window.alert('No Chips!')
        }
        else{
            location.href="./views/game.html"
        }   
    })
}