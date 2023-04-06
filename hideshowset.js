
document.querySelector(".bakiyeset").innerHTML = `${JSON.parse(localStorage.getItem("accountCase"))}₺`
addNegative()
removeActive()
document.querySelector("#setname").value = `${JSON.parse(JSON.stringify(localStorage.getItem("accountName")))}`;
document.querySelector("#setsurname").value = `${JSON.parse(JSON.stringify(localStorage.getItem("accountSurname")))}`;
if(JSON.parse(JSON.stringify(localStorage.getItem("accountTelno")))!== null){
    document.querySelector("#settel").value = `${JSON.parse(JSON.stringify(localStorage.getItem("accountTelno")))}`
}else{
    document.querySelector("#settel").value = ""
}

document.querySelector(".tlyukle").addEventListener("click", function(){
    location.href = "case.html"
})
document.querySelector(".private-set").addEventListener("click", function(){
    document.querySelector(".form-card1").classList.add("negative");
    document.querySelector(".form-card2").classList.remove("negative");
})
document.querySelector(".person-set").addEventListener("click", function(){
    document.querySelector(".form-card2").classList.add("negative");
    document.querySelector(".form-card1").classList.remove("negative");
})
document.querySelector(".accountx").addEventListener("click", function(){
    addNegative()
    document.querySelector(".account-card").classList.remove("negative");
    removeActive()
    document.querySelector(".accountx").classList.add("active")
})
document.querySelector(".orderx").addEventListener("click", function(){
    addNegative()
    document.querySelector(".order-card").classList.remove("negative");
    removeActive()
    document.querySelector(".orderx").classList.add("active")
})
document.querySelector(".favoritex").addEventListener("click", function(){
    addNegative()
    document.querySelector(".favorite-card").classList.remove("negative");
    removeActive()
    document.querySelector(".favoritex").classList.add("active")
})
document.querySelector(".notificx").addEventListener("click", function(){
    addNegative()
    document.querySelector(".notifi-card").classList.remove("negative");
    removeActive()
    document.querySelector(".notificx").classList.add("active")
})
document.querySelector(".payx").addEventListener("click", function(){
    addNegative()
    document.querySelector(".pay-card").classList.remove("negative");
    removeActive()
    document.querySelector(".payx").classList.add("active")
})
document.querySelector(".accountsetx").addEventListener("click", function(){
    addNegative()
    document.querySelector(".accountset-card").classList.remove("negative");
    removeActive()
    document.querySelector(".accountsetx").classList.add("active")
})
document.querySelector(".caseactx").addEventListener("click", function(){
    location.href = "case.html"
})
function addNegative() {
    document.querySelector(".account-card").classList.add("negative");
    document.querySelector(".accountset-card").classList.add("negative");
    document.querySelector(".order-card").classList.add("negative");
    document.querySelector(".favorite-card").classList.add("negative");
    document.querySelector(".notifi-card").classList.add("negative");
    document.querySelector(".pay-card").classList.add("negative");
}
function removeActive() {
    document.querySelector(".accountx").classList.remove("active")
    document.querySelector(".favoritex").classList.remove("active")
    document.querySelector(".notificx").classList.remove("active")
    document.querySelector(".payx").classList.remove("active")
    document.querySelector(".accountsetx").classList.remove("active")
    document.querySelector(".orderx").classList.remove("active")
}