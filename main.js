var elems = document.getElementsByClassName('err');

reNew = () => {
    username.value = "";
    password.value = "";
    oldpass.value = "";
    newpass.value = "";
    document.getElementById("login01").innerHTML = "Login";
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
}

reNewLogin = () => {
    username.value = "";
    password.value = "";
    oldpass.value = "";
    newpass.value = "";
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
}

onLogin = () => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal2").style.display = "none";
    document.getElementById("start").style.display = "none";
    reNew();
}
var matkhau = "admin";
var username = document.getElementById("textusername");
var password = document.getElementById("textpassword");
var errusername = document.getElementById("errorusername");
var errpassword = document.getElementById("errorpassword");
var falseusername = document.getElementById("false-username");
var falsepassword = document.getElementById("false-password");

// username.addEventListener('textInput', usernameVerify);
// password.addEventListener('textInput', passwordVerify);
// function usernameVerify() {
//     if (username.value) {
//         errusername.style.display = "none";
//         document.getElementById("errorusername").style.display = "none";
//         return true;
//     }
// }
// function passwordVerify() {
//     if (password.value) {
//         errpassword.style.display = "none";
//         document.getElementById("errorpassword").style.display = "none";
//         return true;
//     }
// }

onChangeUserName = () => {
    if (username.value) {
        errusername.style.display = "none";
        document.getElementById("false-username").style.display = "none";
        document.getElementById("errorpassword").style.display = "none";
        return true;

    }
    reNewLogin();
}

onChangePassword = () => {
    if (password.value) {
        errpassword.style.display = "none";
        document.getElementById("errorpassword").style.display = "none";
        document.getElementById("false-password").style.display = "none";
        return true;
    }
    reNewLogin();
}

checkLogin = () => {
    if (username.value === "admin" && password.value === matkhau
    ) {
        document.getElementById("login01").innerHTML = "Loading...";
        setTimeout(function () {
            document.getElementById("start").innerHTML = "Đăng nhập thành công"
            document.getElementById("start").style.display = "block";
            document.getElementById("modal").style.display = "none";
            document.getElementById("start").style.margin = "0 auto";
        }, 3000);
    }

    else if (username.value === "") {
        errusername.style.display = "block";
        username.focus();
        return false
    }
    else if (password.value === "") {
        errpassword.style.display = "block";
        password.focus();
        return false
    }

    else if (username.value !== "admin") {
        document.getElementById("login01").innerHTML = "Login";
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
        falseusername.style.display = "block";
        return false;

    }

    else if (password.value !== matkhau) {
        falsepassword.style.display = "block";
        return false;
    }
    reNewLogin();
}






forgotPass = () => {
    document.getElementById("modal2").style.display = "block";
    document.getElementById("modal").style.display = "none";
    reNew();
}

var oldpass = document.getElementById("textoldpassword");
var newpass = document.getElementById("textnewpassword");
var erroldpass = document.getElementById("erroroldpass");
var errnewpass = document.getElementById("errnewpass");

savePass = () => {
    if (oldpass.value === "") {
        document.getElementById("erroroldpass").style.display = "block";
    }
    else if (newpass.value === "") {
        document.getElementById("errnewpass").style.display = "block";
    }
    else if (oldpass.value !== matkhau) {
        document.getElementById("errorpass").style.display = "block";
    }
    else {
        matkhau = document.getElementById("textnewpassword").value;
        document.getElementById("sucess").style.display = "block";
        setTimeout(function () {
            back();
        }, 2000)
    }
}


// oldpass.addEventListener("textInput", oldVerify);
// newpass.addEventListener("textInput", newVerify);
// function oldVerify() {
//     if (oldpass.value) {
//         erroldpass.style.display = "none";
//         document.getElementById("errorpass").style.display = "none";
//         return true;
//     }
// }
// function newVerify() {
//     if (newpass.value) {
//         errnewpass.style.display = "none";
//         document.getElementById("errorpass").style.display = "none";
//         return true;
//     }
// }

onChangeOldPassword = () => {
    document.getElementById("login01").innerHTML = "Login";
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    if (oldpass.value) {
        erroldpass.style.display = "none";
        document.getElementById("errorpass").style.display = "none";
        return true;
    }
}

onChangeNewPassword = () => {
    if (newpass.value) {
        document.getElementById("login01").innerHTML = "Login";
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
        errnewpass.style.display = "none";
        document.getElementById("errorpass").style.display = "none";
        return true;
    }
}



back = () => {
    reNew();
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal").style.display = "block";
}

