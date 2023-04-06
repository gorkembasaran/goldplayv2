function activeStatus() {
    document.querySelector(".login-sign").classList.add("negative");
    document.querySelector(".selections").classList.remove("negative");
    document.querySelector(".header-bakiye").classList.remove("negative");
    let tag30 = `Bakiye : ${JSON.parse(localStorage.getItem("kullanicilar"))[JSON.parse(localStorage.getItem("accountNumber"))].bakiye}₺`
    let tag32 = `${JSON.parse(localStorage.getItem("kullanicilar"))[JSON.parse(localStorage.getItem("accountNumber"))].bakiye}₺`
    document.querySelector(".bakiye").innerHTML = tag30;
    document.querySelector(".case").innerHTML = tag32;
    document.querySelector(".righting").innerHTML = `${JSON.parse(localStorage.getItem("kullanicilar"))[JSON.parse(localStorage.getItem("accountNumber"))].name} ${JSON.parse(localStorage.getItem("kullanicilar"))[JSON.parse(localStorage.getItem("accountNumber"))].surname}`
}   

function removeStatus() {
    localStorage.removeItem("accountStatus");
    localStorage.removeItem("accountNumber");
    localStorage.removeItem("accountName");
    localStorage.removeItem("accountSurname");
    localStorage.removeItem("accountEmail");
    localStorage.removeItem("accountUsername");
    localStorage.removeItem("accountPassword");
    localStorage.removeItem("accountCode");
    localStorage.removeItem("accountCase");
    localStorage.removeItem("accountTelno");
}
function hide(){
    document.querySelector(".popupaccount").classList.add("negative");
}

