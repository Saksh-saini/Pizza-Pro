let header = document.getElementById("black");



window.onscroll = ()=>{
    var top = window.scrollY;
    if(top >= 100){
        header.style.backgroundColor ="rgba(0, 0, 0, 0.9)";
    }else{
        header.style.backgroundColor ="";
}
}
