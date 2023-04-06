if(localStorage.getItem("accountStatus")){
    var accountStatus = localStorage.getItem("accountStatus");
    var accountNumber = localStorage.getItem("accountNumber");
    var accountName = JSON.parse(JSON.stringify(localStorage.getItem("accountName")));
    var accountSurname = JSON.parse(JSON.stringify(localStorage.getItem("accountSurname")));
    var accountEmail = JSON.parse(JSON.stringify(localStorage.getItem("accountEmail")));
    var accountUsername = JSON.parse(JSON.stringify(localStorage.getItem("accountUsername")));
    var accountPassword =  JSON.parse(JSON.stringify(localStorage.getItem("accountPassword")));
    var accountCode = localStorage.getItem("accountCode");
    var accountCase = localStorage.getItem("accountCase");
}

