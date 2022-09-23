

const foco=document.getElementById("titulo");
foco.click=function(){
    let variable=false;
    variable=true;
    if(variable==true){
        let titulos=document.getElementById("titulo");
        titulos.style.margin=0
        alert("funciona")
    }

}
function buscador(){
    nav=document.getElementById("nav")
    if(nav.style.height=="auto"){
        document.getElementById("nav").style.height="70px";
        document.getElementById("search_container").style.padding="10px";
        document.getElementById("search_container").style.border="none";
        

        

    }else{
        document.getElementById("nav").style.height="auto";
        document.getElementById("nav").style.transition="1s";
        document.getElementById("search_container").style.border="2px solid greenyellow";
        
    }
    

}

   



/* foco=document.getElementById("titulo");
foco.addEventListener("click",marginTitulos,false) */








