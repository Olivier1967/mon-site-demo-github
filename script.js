document.querySelector('.fa-xmark').style.display = "none";

const menuBtn = document.querySelector(".btn_menu");
const sidebar = document.querySelector(".sidebar");
sidebar.style.right = "-25rem";

menuBtn.onclick = function(){
    if(sidebar.style.right == "-25rem"){
       sidebar.style.right = "0";
       document.querySelector('.fa-xmark').style.display = "";
       document.querySelector('.fa-bars').style.display = "none";
    }else{
        sidebar.style.right = "-25rem";
        document.querySelector('.fa-xmark').style.display = "none";
        document.querySelector('.fa-bars').style.display = "";
    }
}