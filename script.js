let btn3=document.getElementById("btn1");
btn3.addEventListener("click",function(){
    let content = document.getElementById("content");
    content.style.display="none";
    let heding=document.getElementById("text3");
    heding.style.display="block";
});

const depositBtn=document.getElementById("depositBtn");
depositBtn.addEventListener("click",function(){
    const depositAmount= document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);
    const currentAmount=document.getElementById("text").innerText;
    const currentNumber=parseFloat(currentAmount);
    const TotalAmount=depositNumber+currentNumber;
    document.getElementById("text").innerText=TotalAmount;
    document.getElementById("depositAmount").value="";
    
});
const withdrawBtn=document.getElementById("withdrawbtn");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount= document.getElementById("WithdrawAmount").value;
    const WithdrawNumber=parseFloat(withdrawAmount);
    const currentWithdraw=document.getElementById("textr").innerText;
    const currentWithdrawNumber=parseFloat(currentWithdraw);
    const TotalWithdrawAmount=WithdrawNumber+currentWithdrawNumber;
    document.getElementById("textr").innerText=TotalWithdrawAmount;
    document.getElementById("WithdrawAmount").value="";
});

