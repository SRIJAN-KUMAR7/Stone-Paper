let user_score=0;
let comp_score=0;
const message=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");
let userscoreElement=document.querySelector("#user-score");
let compscoreElement=document.querySelector("#computer-score");

const generateComp_choice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const draw_game=()=>{
    console.log("Game was Draw!");
     message.innerText="Draw!"
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
const playgame=(userChoice)=>{
    console.log("user_choice=",userChoice);
    //computer choice generation:
    const comp_choice=generateComp_choice();
    console.log("comp_choice=",comp_choice);
    
    if (userChoice===comp_choice){
        draw_game();
        message.style.backgroundColor="#081b31"
    }
    else{
        let user_win=true;
        if(userChoice==="rock"){
            //computer:scissors paper
           user_win=comp_choice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock scissors
            user_win=comp_choice==="scissors"? false :true;
        }
        else{
            //rock paper
            user_win=comp_choice==="rock"?false:true;
        }
        showwinner(user_win,userChoice,comp_choice);

    }
};

 const showwinner=(user_win,userChoice,comp_choice)=>{
    if(user_win){
        console.log("You win!");
        user_score++;
        userscoreElement.innerText=user_score;
        message.innerText=`You Win! Your ${userChoice} beats ${comp_choice}`
        message.style.backgroundColor="green";

    }
    else{
        comp_score++;
        compscoreElement.innerText=comp_score;
        console.log("You lose")
         message.innerText="You Lose."
         message.style.backgroundColor="red";
    }
        
};



