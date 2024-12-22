alert("Sorry sa design, i hope you'll read every words i say HAHAHAHAHAHAHAHA");
alert("Because, i don't know how to express my feelings on you.");
alert("Since IT man ta ari nalang nako ipaagi.");
alert("Hoping after this di ka magbag'o. haha");
alert("user: imong birthmonth small letters all");
alert("pass: your birth year");

function loginBtn() {
    const username = "february";
    const password = "2004";
    
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;


    if(user == username && pass == password){
        window.location.href = "home.html";
        alert("Successfully Logged In !");
    }else{
        alert("Wrong Password, Try Again !");
    }
}
