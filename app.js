if(localStorage.getItem("accountStatus")){
    activeStatus()
    document.querySelector(".righting").addEventListener("click", function(){
        document.querySelector(".popupaccount").classList.remove("negative");
        setTimeout(hide,10000);
    })
    document.querySelector(".exitbtn").addEventListener("click", function(){
        removeStatus()
        location.href = "index.html";
    })
}else{
}
