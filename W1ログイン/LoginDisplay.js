// const LoginID=document.getElementById("LoginText");
// const Password=document.getElementById("PasswordText");
// const LoginID_value=LoginID.value;
// const Password_value=Password.value;
const trueID="aaa";
const truePassword="123";
LoginID_value=null;
Password_value=null;
function IDSet(){
    LoginID_value = document.getElementById("LoginText").value;
}
function PasswordSet(){
    Password_value = document.getElementById("PasswordText").value;
}
function PushDecide(){
    if(LoginID_value==trueID && Password_value==truePassword){
        window.location.href = '../W2メイン/MainDisplay.html';
    }else if(LoginID_value==null || Password_value==null){
        alert("入力されていない欄があります．");
    }else{
        alert("ログインIDまたはパスワードが違います．");
    }
}
