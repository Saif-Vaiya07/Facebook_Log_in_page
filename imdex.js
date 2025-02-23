// Facebook Log in pannel start
const email = "saif@gmail.com";
const phoneNum = "01881220134";
const password = "saif1234";


const userIn = document.querySelector("#userin");
const userPass = document.querySelector("#userpass");
const validation = document.querySelector("#validation");

const SubBtn = document.querySelector(".loginbtn").addEventListener("click",(e) => {
    
    e.preventDefault();

    const userInValue = userIn.value.trim(); // Added .trim() to remove any extra spaces in the input fields.
    const userPassValue = userPass.value.trim();

    if((userInValue === email || userInValue === phoneNum) && userPassValue === password ){
        validityStyle("#14b914","Log In Successful");
        return;
        // alert("Log In Successful");
    }

    else if(userInValue ===""){
        validityStyle("#D44646","Please input your Username");
        return;
        // alert("Please input your Username");
    }

    else if(userPassValue ===""){
        validityStyle("#D44646","Please input your Password");
        return;
        // alert("Please input your Password");
    } 

    else if((userInValue !== email && userInValue !== phoneNum) && userPassValue !== password ){
        validityStyle("#D44646","Invalid Username and Password");
        return;
        // alert("Invalid Username and Password");
    }

    else if(userInValue !== email && userInValue !== phoneNum){
        validityStyle("#D44646","Invalid Username");
        return;
        // alert("Invalid Username");
    }

    else if(userPassValue !== password){
        validityStyle("#D44646","Invalid Password");
        return;
        // alert("Invalid Password");
    }

    else {
        validityStyle("#D44646","Inpur your Username and Password");
        return;
        // alert("Inpur your Username and Password");
    };

    
});
const validityStyle = (colour,text) => {
    const logInValidity = validation;

    logInValidity.style.display ="block";
    logInValidity.style.color =colour;
    logInValidity.innerHTML =text;
}


