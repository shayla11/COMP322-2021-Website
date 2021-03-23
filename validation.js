let validationcounter;

function validate() {
    validationcounter = 6;
    document.getElementById("output").innerHTML = ""
    let username = document.myform.username.value;
    let email = document.myform.email.value;
    let phone = document.myform.phonenum.value;
    let enterpass = document.myform.enterpass.value;
    let confirmpass = document.myform.confirmpass.value;
    let gender = document.myform.gender.value;
    let agegroup = document.myform.agegroup.value;

    document.getElementById("output").innerHTML = check_username(username)
        + check_email(email) + check_phone(phone) + check_passwords(enterpass, confirmpass)
        + check_gender(gender) + check_age(agegroup);

    if (validationcounter == 0){
        window.location.href = "index.html"
    }

}

function empty(){
    document.getElementById("output").innerHTML = ""
}

//check username
function check_username(username) {
    let reg = /[^A-Z#$@!&?]*$/y;
    let text = ""
    if (username === "") {
        text = "Please Enter " + "<span style='color: red; font-weight: bold'> Username </span><br>"
    } else if ( username.match(reg)){
        text =  ""
        validationcounter -= 1;
    } else {
        text =  "Please Enter " + "<span style='color: gold; font-weight: bold'> a valid username </span><br>"
    }
    return text + "<br>"
}

//check email
function check_email(email) {
    let reg = /[\w]*@[\w]*.com|[\w]*@[\w]*.net|[\w]*@[\w]*.org|[\w]*@[\w]*.edu/y
    let text = ""
    if (email === "") {
        text = "Please Enter " + "<span style='color: red; font-weight: bold'> Email </span><br>"
    } else if(email.match(reg)) {
        text = ""
        validationcounter -= 1;
    } else {
        text = "Please Enter " + "<span style='color: gold; font-weight: bold'> a valid email </span><br>"
    }
    return text + "<br>"
}


//check phone number
function check_phone(phone) {
    let reg = /\((\d{3})\)(-\d{3}-\d{4})$/
    let text = ""
    if (phone === "") {
        text = "Please Enter " + "<span style='color: red; font-weight: bold'> Phone Number</span><br>"
    } else if(phone.match(reg)) {
        text = ""
        validationcounter -= 1;
    } else  {
        text = "Please Enter " + "<span style='color: gold; font-weight: bold'> a valid phone number </span><br>"
    }
    return text + "<br>"
}

//check password(s)
function check_passwords(enterpass, confirmpass) {
    let reg = /^(?=.*[a-zA-Z\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let text = ""
    if (enterpass === "" || confirmpass === "") {
        text = "Please Enter " + "<span style='color: red; font-weight: bold'> Password</span><br>"
    } else if (enterpass.match(reg) && enterpass == confirmpass){
        text = ""
        validationcounter -= 1;
    } else if (!enterpass.match(reg)){
        text = "Please Enter " + "<span style='color: gold; font-weight: bold'> a valid password </span><br>"
    } else if (enterpass != confirmpass) {
        text = alert("passwords do not match")
        document.myform.enterpass.value = ""
        document.myform.confirmpass.value = ""
    } else if (enterpass == confirmpass) {
        text = ""
    }
    return text + "<br>"
}

//check gender
function check_gender(gender) {
    let text = "";
    if (gender === "") {
        text = "Please Select " + "<span style='color: red; font-weight: bold'> Gender</span><br>"
    } else {
        validationcounter -= 1;
    }
    return text + "<br>"
}

//check age group
function check_age(agegroup) {
    let text = " "
    if (agegroup === "") {
        text = "Please Select " + "<span style='color: red; font-weight: bold'> Age Group</span><br>"
    } else {
        validationcounter -= 1;
    }
    return text + "<br>"
}


