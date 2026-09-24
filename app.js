let yesBtn=document.querySelector("#yes");
let noBtn=document.querySelector("#no");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let showMsg=document.querySelector("#show");


yesBtn.addEventListener("click",(e)=>{
    noBtn.style.display="none";
    msgContainer.classList.remove("hide");

    setTimeout(()=>{
        msg.innerText="3";
    },2000);
    
     setTimeout(()=>{
        msg.innerText="2";   
    },3000);
 
     setTimeout(()=>{
         msg.innerText="1";  
    },4000);

     setTimeout(()=>{
    msg.innerText="Loading your surprise...."
    },5000);
    
     setTimeout(()=>{
         window.location.href="yes.html";    
       
    },7000); 
   
   
    });

    const firstClick=()=>{
         yes.style.height="4rem";
        yes.style.width="6rem";
        no.style.position="absolute";
        no.style.top="10px";
        no.style.left="12px";
        show.innerText="Are you sure?😟";
    }

    const secondClick=()=>{
        yes.style.height="8rem";
        yes.style.width="10rem";
        no.style.position="absolute";
        no.style.left="80px";
        no.style.top="450px";
        show.innerText="Think again! 😭";
    }
    const thirdClick=()=>{
         yes.style.height="14rem";
        yes.style.width="16rem";
        no.style.position="absolute";
        no.style.left="90px";
        no.style.top="550px";
        show.innerText="please ❤️";
    }
    const fourthClick=()=>{
         yes.style.height="20rem";
        yes.style.width="40rem";
        no.style.position="absolute";
        no.style.left="90px";
        no.style.top="600px";
        show.innerText="you can't escape 😆";
    }
    const fifthClick=()=>{
          yes.style.height="30rem";
        yes.style.width="50rem";
       no.style.display="none";
        show.innerText="just click yes 😂";
    }


  let clickCount=0;
    noBtn.addEventListener ("click",()=>{
        clickCount++;
    
        if(clickCount===1)
        {
        firstClick();
        
        }
        if(clickCount===2){
        secondClick();
        }
        if(clickCount===3){
            thirdClick();
        }
        if(clickCount===4)
        {
            fourthClick();
        }
        if(clickCount===5){
            fifthClick();
        }
        }
   );
