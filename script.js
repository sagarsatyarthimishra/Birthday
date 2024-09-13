let firstHead = document.getElementById("first");
let secHead = document.getElementById("second");
let btnFist = document.getElementById("third");
let btnSec = document.getElementById("forth");
let btnThird = document.getElementById("fifth");
let btnForth = document.getElementById("sixth");
let btnFive = document.getElementById("seven");
let btnSix = document.getElementById("eight");
let wholeBtn1=document.getElementById("btn");
let wholeBtn2=document.getElementById("btn1");
let wholeBtn3=document.getElementById("btn2");
let container=document.getElementById("container")
let img1=document.createElement('img');
img1.src='icons8-birthday-100.png';
img1.className="image";
let img2=document.createElement('img');
img2.src='icons8-gift-100.png';
img2.className="image";
function hello() {
  btnFist.style.top = "220px";
  btnFist.innerText = "Please🙏 press hello!! ";
  btnThird.style.top = "220px";
  btnThird.innerText = "Please🙏 press Yes!! ";
  btnFive.style.top="220px";
  btnFive.innerText="No Baby, I know that Today's is my Love Birthday"
}
function reset() {
  setInterval(() => {
    btnFist.style.top = "0";
    btnFist.innerText = "IGNOR";
    btnThird.style.top = "0";
    btnThird.innerText = "NO";
    btnFive.style.top = "0";
    btnFive.innerText = "No Baby";
  }, 2000);
}
btnSec.addEventListener("click", step);
function step() {
  firstHead.innerText = "I Love You So Much";
  secHead.style.display = "none";
  wholeBtn1.style.display="none";
  setTimeout(() => {
    secHead.style.display = "block";
    secHead.innerText = "Do you Love Me?";
    wholeBtn2.style.display="flex";
  }, 1000);
}
btnForth.addEventListener("click", ()=>{
  firstHead.innerText = "Yeah! You Love Me";
  secHead.style.display = "none";
  wholeBtn2.style.display="none";
  setTimeout(() => {
    secHead.style.display = "block";
    secHead.innerText = "I am hear that Today's is your Birthday?";
    wholeBtn3.style.display="flex";
  }, 3000);
});
btnSix.addEventListener("click", ()=>{
  container.style.height="80%";
  container.style.width="70%";
  container.style.paddingLeft="5vh"
  container.style.paddingRight="5vh"
  container.style.backgroundColor="Cyan"
  document.body.style.color="Red";
  firstHead.innerText = "To the queen of my heart, happy birthday! Every moment with you is a treasure, and I can’t imagine my life without you in it. May this year bring you all the happiness you deserve.";
  secHead.style.display = "none";
  wholeBtn3.style.display="none";
  setTimeout(() => {
    img1.style.position="relative";
    img1.style.top="5%";
    img1.style.left="0%";
    img1.style.transform="translateX(0%)"
    container.append(img1);
  }, 2000);
  setTimeout(() => {
    img2.style.position="relative";
    img2.style.top="5%";
    img2.style.left="0%";
    img2.style.transform="translateX(0%)"
    container.append(img2);
  }, 3000);
  setTimeout(() => {
    secHead.style.display = "block";
    secHead.style.border="0.1px";
    secHead.style.borderStyle="Solid";
    secHead.style.borderColor="white";
    secHead.style.borderRadius="20px";
    secHead.style.backgroundColor="white";
    secHead.innerText = "I Love You So Much My Love,My Life Partner,My Wife,Sona,Babu,Jaanu,Kittu";
    document.body.addEventListener("click",()=>{
      location.reload();
      })
  }, 4000);
});

