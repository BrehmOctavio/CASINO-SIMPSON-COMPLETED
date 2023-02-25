//VARIABLES

const back = document.querySelector(".back");
const go = document.querySelector(".btn-slot");
const img1 = document.querySelector(".img-icon-1");
const img2 = document.querySelector(".img-icon-2");
const img3 = document.querySelector(".img-icon-3");
const result = document.querySelector(".result");
const credits = document.querySelector(".credits");
const reload = document.querySelector(".reload-credits");
let coins = 100;

//BACK

back.addEventListener("click",()=>{
    window.open("../html/main.html");
    window.close("../html/slot.html"); 
});

//DATA

const data = [
    {
        id: 1,
        img: "../assets/slot-homero.jpg"
    },
    {
        id: 2,
        img: "../assets/slot-mar.png"
    },
    {
        id: 3,
        img: "../assets/slot-lisa.jpg"
    },
];

//CREDITS

credits.textContent = "CREDITS: 100";

reload.addEventListener("click",()=>{
    window.location.reload();
});


//GAME

const getResult = ()=>{
    let number1 = Math.floor(Math.random()*4);
    let number2 = Math.floor(Math.random()*4);
    let number3 = Math.floor(Math.random()*4);

    if(number1 == number2 && number2 == number3){
        result.textContent = "WON !";
          coins = coins + 10;
          credits.textContent = `CREDITS: ${coins}`;
    }else{
        result.textContent = "LOSE";
        coins = coins - 10;
        credits.textContent = `CREDITS: ${coins}`;
    };

    if(number1 == 1){
        img1.src = "../assets/slot-homero.jpg";
    };
    if(number1 == 2){
        img1.src = "../assets/slot-lisa.jpg";
    };
    if(number1 == 3){
        img1.src = "../assets/slot-mar.png";
    };

    if(number2 == 1){
        img2.src = "../assets/slot-homero.jpg";
    };
    if(number2 == 2){
        img2.src = "../assets/slot-lisa.jpg";
    };
    if(number2 == 3){
        img2.src = "../assets/slot-mar.png";
    };

    if(number3 == 1){
        img3.src = "../assets/slot-homero.jpg";
    };
    if(number3 == 2){
        img3.src = "../assets/slot-lisa.jpg";
    };
    if(number3 == 3){
        img3.src = "../assets/slot-mar.png";
    };
};

//GO

go.addEventListener("click",()=>{
    if(coins == 0){
        alert("NO CREDITS");
        reload.style.display = "block";
        result.style.display = "none";
    }else{
        getResult();
    };
});


